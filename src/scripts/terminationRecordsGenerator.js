import { faker } from '@faker-js/faker';
import fs from 'fs'


function generateRandomTerminationRecord(batch) {
  return {
    name: faker.person.fullName(),
    rollNumber: `MD${batch}-${faker.string.numeric(3)}`,
    batch: String(batch),
    degree: "MBBS",
    reason: faker.helpers.arrayElement([
      "Academic dishonesty",
      "Code of conduct violation",
      "Excessive absences",
      "Falsified records",
      "Plagiarism",
      "Substance abuse",
      "Inappropriate behavior",
    ]),
    terminationDate: faker.date
      .between({from:`${batch}-06-01`, to: `${Number(batch) + 5}-05-30`})
      .toISOString()
      .split("T")[0],
  };
}

// Add the fixed record first
const records = [
  {
    name: "Arjun Raj Verma",
    rollNumber: "MD2008-001",
    batch: "2008",
    degree: "MBBS",
    reason: "Code of conduct violation",
    terminationDate: "2007-06-07",
  },
];

// Generate 29 more random records
for (let i = 0; i < 29; i++) {
  const batch = faker.number.int({ min: 1990, max: 2024 });
  records.push(generateRandomTerminationRecord(batch));
}

// Write to a JSON file
fs.writeFileSync('src/assets/college/terminated_students.json', JSON.stringify(records, null, 2));
console.log("✅ Generated 30 termination records in 'src/assets/college/terminated_students.json'");
