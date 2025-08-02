import { faker } from '@faker-js/faker';
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';


function getFantasyPlace() {
    return 'Redmarsh, Nocturna, Zorik'
}

function generateBirthCertificate() {
  const gender = faker.helpers.arrayElement(['Male', 'Female']);
  const firstName = faker.name.firstName(gender === 'Male' ? 'male' : 'female');
  const lastName = faker.name.lastName();

  const childName = `${firstName} ${lastName}`;
  const fatherName = `${faker.name.firstName('male')} ${lastName}`;
  const motherName = `${faker.name.firstName('female')} ${lastName}`;

  const dob = faker.date.between({ from: '2020-01-01', to: '2025-12-31' });
  const dateOfBirth = dob.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const timeOfBirth = dob.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const placeOfBirth = getFantasyPlace();
  const certificateNumber = `BC-${dob.getFullYear()}-${faker.string.numeric(6)}`;
  const registrar = "Office of the Civil Registrar"
  const id = uuidv4();

  return {
    id,
    childName,
    dateOfBirth,
    timeOfBirth,
    gender,
    placeOfBirth,
    fatherName,
    motherName,
    certificateNumber,
    registrar
  };
}

console.log(generateBirthCertificate())

// Generate 100 records
const birthRecords = Array.from({ length: 100 }, generateBirthCertificate);

// Write to JSON file
fs.writeFileSync('src/assets/birth_records.json', JSON.stringify(birthRecords, null, 2), 'utf-8');

console.log('✅ 100 birth records written to birth_records.json');
