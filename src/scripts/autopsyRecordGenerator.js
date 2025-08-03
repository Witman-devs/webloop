import { faker } from '@faker-js/faker';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a single mock autopsy report object.
 * @returns {object} An object with data for the AutopsyReport component.
 */
function generateAutopsyReport() {
  // Determine gender and generate a name
  const gender = faker.helpers.arrayElement(['Male', 'Female']);
  const firstName = faker.person.firstName(gender === 'Male' ? 'male' : 'female');
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  // Generate a plausible age
  const age = faker.number.int({ min: 18, max: 90 });

  // Generate a random date of death
  const dateOfDeath = faker.date.past({ years: 1, refDate: new Date() });
  const formattedDateOfDeath = dateOfDeath.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Generate a date of examination a few days after death
  const dateOfExamination = faker.date.future({ years: 0.01, refDate: dateOfDeath });
  const formattedDateOfExamination = dateOfExamination.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Create a list of possible examiners and locations
  const examiner = `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`;
  const location = `${faker.location.city()} Medical Examiner's Office`;

  // Create a list of possible causes of death and findings
  const causeOfDeaths = [
    'Gunshot wound to the chest',
    'Blunt force trauma to the head',
    'Stabbing wound to the abdomen',
    'Asphyxiation by strangulation',
    'Cardiac arrest due to natural causes',
    'Drug overdose',
    'Motor vehicle accident'
  ];
  const causeOfDeath = faker.helpers.arrayElement(causeOfDeaths);

  // Generate more specific findings based on the cause of death
  let findings = '';
  switch (causeOfDeath) {
    case 'Gunshot wound to the chest':
      findings = `- Entry wound at ${faker.number.int({ min: 2, max: 5 })}th intercostal space\n- Bullet trajectory consistent with a close-range shot\n- Bullet lodged near T${faker.number.int({ min: 3, max: 6 })} vertebra\n- No signs of struggle`;
      break;
    case 'Blunt force trauma to the head':
      findings = `- Lacerations and contusions to the scalp\n- Depressed skull fracture observed in the parietal bone\n- Subdural hematoma present\n- No defensive wounds found`;
      break;
    case 'Stabbing wound to the abdomen':
      findings = `- Single stab wound to the left upper quadrant of the abdomen\n- Injury to the liver and stomach\n- Significant internal hemorrhage\n- Knife-like weapon identified as the cause`;
      break;
    case 'Asphyxiation by strangulation':
      findings = `- Petechial hemorrhages in the eyelids and conjunctiva\n- Ligature marks around the neck\n- Hyoid bone fractured\n- Manual compression of the neck identified as the cause`;
      break;
    case 'Cardiac arrest due to natural causes':
      findings = `- Evidence of severe coronary artery disease\n- Enlarged heart (cardiomegaly)\n- No signs of external trauma or foul play`;
      break;
    case 'Drug overdose':
      findings = `- Drug paraphernalia found near the body\n- Toxicological analysis confirmed high levels of ${faker.helpers.arrayElement(['fentanyl', 'heroin', 'cocaine'])} in the blood\n- No signs of foul play`;
      break;
    default: // Motor vehicle accident
      findings = `- Multiple fractures and internal injuries\n- Seatbelt marks and airbag deployment confirmed\n- Cause of death consistent with high-speed impact trauma`;
      break;
  }
  
  // Add a conclusion
  const conclusion = `The cause of death is consistent with a ${causeOfDeath.toLowerCase()}.`;
  const id = uuidv4().substring(0, 8).toUpperCase()

  return {
    id: id,
    caseNumber: `AUT-${dateOfDeath.getFullYear()}-${id}`,
    name: fullName,
    age,
    gender,
    dateOfDeath: formattedDateOfDeath,
    dateOfExamination: formattedDateOfExamination,
    examiner,
    location,
    causeOfDeath,
    findings,
    conclusion,
  };
}

// Generate 100 records
const autopsyReports = Array.from({ length: 100 }, generateAutopsyReport);

// Write to a JSON file
fs.writeFileSync('src/assets/autopsy_reports.json', JSON.stringify(autopsyReports, null, 2), 'utf-8');

console.log('✅ 100 autopsy reports written to src/assets/autopsy_reports.json');
