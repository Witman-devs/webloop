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

  const dob = faker.date.between({ from: '1960-01-01', to: '2025-12-31' });
  const dateOfBirth = dob.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dod = faker.date.between({ from: dob, to: '2025-12-31' });
  const dateOfDeath = dod.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const placeOfDeath = getFantasyPlace();
  const causeOfDeath = faker.helpers.arrayElement([
    'Natural Causes',
    'Accident',
    'Illness',
    'Unknown',
    'Chemical Mishap',
    'Beast Attack',
    'Poisoning',
    'Battle Wounds'
  ]);
  const fullName = `${firstName} ${lastName}`;

  const certificateNumber = `DC-${dob.getFullYear()}-${faker.string.numeric(6)}`;
  const registrar = "Office of the Civil Registrar"
  return {
    fullName,
    dateOfBirth,
    dateOfDeath,
    placeOfDeath,
    causeOfDeath,
    certificateNumber,
    registrar
  };
}

console.log(generateBirthCertificate())

// Generate 100 records
const birthRecords = Array.from({ length: 100 }, generateBirthCertificate);

// Write to JSON file
fs.writeFileSync('src/assets/death_records.json', JSON.stringify(birthRecords, null, 2), 'utf-8');

console.log('✅ 100 birth records written to birth_records.json');
