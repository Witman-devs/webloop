import { faker } from '@faker-js/faker';
import fs from 'fs';

/**
 * Generates a single mock visitor log entry object.
 * @returns {object} An object with data for the visitor log.
 */
function generateVisitorLogEntry() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  // Generate a random date in the last 10 years
  const now = new Date();
  const tenYearsAgo = new Date(now.getFullYear() - 10, now.getMonth(), now.getDate());
  const visitDate = faker.date.between({ from: tenYearsAgo, to: now });

  // Format date and time
  const formattedDate = visitDate.toISOString().split('T')[0]; // YYYY-MM-DD
  const formattedTime = visitDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // List of possible purposes for the visit
  const purposes = [
    'Meeting',
    'Delivery',
    'Interview',
    'Patient Visit',
    'Service Call',
    'Appointment',
    'Tour',
  ];

  // List of possible comments
  const comments = [
    'Discussed medical supplies',
    'Dropped off a package for the front desk',
    'Interviewing for the new nursing position',
    'Waiting in the lobby for an appointment',
    'Performed routine maintenance on HVAC system',
    'Meeting with the department head',
    'No additional comments',
  ];

  const signature = `${firstName.charAt(0)}. ${lastName.charAt(0)}.`;

  return {
    date: formattedDate,
    time: formattedTime,
    name: fullName,
    purpose: faker.helpers.arrayElement(purposes),
    contact: faker.phone.number('###-####'),
    comment: faker.helpers.arrayElement(comments),
    signature: signature,
  };
}

// Generate 100 records
const visitorLogs = Array.from({ length: 100 }, generateVisitorLogEntry);

// Write to a JSON file
fs.writeFileSync('src/assets/visitor_logs.json', JSON.stringify(visitorLogs, null, 2), 'utf-8');

console.log('✅ 100 visitor logs written to src/assets/visitor_logs.json');
