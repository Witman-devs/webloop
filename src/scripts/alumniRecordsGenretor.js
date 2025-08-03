import { faker } from '@faker-js/faker';
import fs from 'fs';

const specializations = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
  'Oncology', 'Psychiatry', 'Dermatology', 'Radiology',
  'Gastroenterology', 'Pathology', 'Ophthalmology', 'Anesthesiology'
];

function generateAlumnus(batch) {
  const rollNumber = `MD${batch}-${faker.number.int({ min: 1, max: 150 }).toString().padStart(3, '0')}`;
  const name = `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`;
  const graduationYear = String(Number(batch) + 5);
  const specialization = faker.helpers.arrayElement(specializations);
  const currentEmployment = `${faker.person.jobTitle()}, ${faker.company.name()} Hospital`;

  return {
    name,
    rollNumber,
    degree: 'MBBS',
    batch: String(batch),
    graduationYear,
    specialization,
    currentEmployment,
  };
}

// Start with the two fixed entries
const alumni = [
  {
    name: "Dr. Rohan Mehta",
    rollNumber: "MD2000-001",
    degree: "MBBS",
    batch: "2000",
    graduationYear: "2005",
    specialization: "Cardiology",
    currentEmployment: "Senior Cardiologist, HeartCare Institute"
  },
  {
    name: "Dr. Juan Martinez",
    rollNumber: "MD2000-002",
    degree: "MBBS",
    batch: "2000",
    graduationYear: "2005",
    specialization: "Surgery",
    currentEmployment: "Lead Surgeon, GlobalMed Hospital"
  }
];

const batches = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 1990 + i);

// Generate 98 random alumni to make a total of 100
while (alumni.length < 100) {
  const batch = faker.helpers.arrayElement(batches);
  alumni.push(generateAlumnus(batch));
}

fs.writeFileSync('src/assets/college/alumniRecords.json', JSON.stringify(alumni, null, 2), 'utf-8');
console.log('✅ 100 alumni records (including fixed entries) written to alumniRecords.json');
