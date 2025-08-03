import { faker } from '@faker-js/faker';
import fs from 'fs';
import { ADDRESS, LOGOS } from '../consts';

/**
 * Generates a single mock employment record object.
 * @returns {object} An object with data for the EmploymentRecordSheetReadOnly component.
 */
function generateEmploymentRecord(type) {
  const gender = faker.helpers.arrayElement(['Male', 'Female']);
  const firstName = faker.person.firstName(gender === 'Male' ? 'male' : 'female');
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  // Generate a plausible date of birth
  const dob = faker.date.past({ years: 40, refDate: '2005-01-01' });
  const formattedDob = dob.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const yearOfPassing = faker.number.int({ min: 1990, max: 2023 });

  // List of possible qualifications
  const qualifications = [
    'Bachelor of Engineering in Computer Science',
    'Master of Business Administration',
    'Bachelor of Science in Medical Technology',
    'Ph.D. in Physics',
    'Bachelor of Arts in English Literature',
    'MBBS'
  ];

  // List of mock universities
  const universities = [
    'University of medical',
    'National Institute of Technology',
    'Indian Institute of Science',
    'Delhi University',
    'Mumbai University',
    'Stanford University'
  ];
  
  // Create a list of possible special requests
  const specialRequests = [
    'Requires flexible working hours due to a new child being born.',
    'Needs accommodation for a medical condition.',
    'Requests a standing desk for ergonomic reasons.',
    'Prefers remote work on Fridays.',
    'No special requests at this time.'
  ];

  return {
    fullName,
    dob: formattedDob,
    contact: faker.phone.number('+1-##########'),
    email: faker.internet.email({ firstName, lastName }),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
    qualification: faker.helpers.arrayElement(qualifications),
    university: faker.helpers.arrayElement(universities),
    yearOfPassing: String(yearOfPassing),
    specialRequest: faker.helpers.arrayElement(specialRequests),
    needStaffQuarter: faker.datatype.boolean(),
    companyLogo: LOGOS[type],
    companyAddress: {
      // name: `${faker.company.name()} Hospital`,
      name: `Redmarsh Hospital`,
      lines: ADDRESS[type].replace(", ", ",\n"),
    },
  };
}

console.log(generateEmploymentRecord("hospital"))
console.log(generateEmploymentRecord("police"))
console.log(generateEmploymentRecord("news"))
console.log(generateEmploymentRecord("hospital"))
// Generate 100 records
// const employmentRecords = Array.from({ length: 100 }, generateEmploymentRecord, "hospital");

// // Write to a JSON file
// fs.writeFileSync('src/assets/employment_records.json', JSON.stringify(employmentRecords, null, 2), 'utf-8');

// console.log('✅ 100 employment records written to src/assets/employment_records.json');
