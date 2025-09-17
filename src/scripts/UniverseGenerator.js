import { faker } from "@faker-js/faker";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const birthRecordsFile = true;
const deathRecordsFile = true;
const employmentRecordsFile = true;

const birthRecords = [];
const deathRecords = [];
const employmentRecords = [];
const alumniRecords = [];
const autopsyReports = []

const doctors = [];

// professions
const professions = [
  "Professor",
  "Cardiologist",
  "Neurologist",
  "Gynecologist",
  "Optometrist",
  "Businessman",
  "Watchman",
  "Ward",
  "Nurse",
  "Peon",
  "Driver",
  "Lawyer",
  "Accountant",
  "Chemical Engineer",
  "Computer Engineer",
  "Inspector",
  "Artist",
  "Journalist",
];

const medicalProfessions = ["Cardiologist", "Neurologist", "Gynecologist"];

const workplaces = [
  "Redmarsh Healthcare",
  "Kingsborough College of Optometry",
  "St. Healmore Medical College",
  "Atlas News Agency",
  "Redmarsh Police Department",
  "Redmarsh Chemicals",
  "Generico",
];

const workplaceProfession = {
  "Redmarsh Healthcare": [
    "Cardiologist",
    "Neurologist",
    "Gynecologist",
    "Optometrist",
    "Watchman",
    "Ward",
    "Nurse",
    "Peon",
    "Driver",
    "Accountant",
  ],
  "Kingsborough College of Optometry": [
    "Professor",
    "Optometrist",
    "Watchman",
    "Peon",
    "Accountant",
  ],
  "St. Healmore Medical College": [
    "Professor",
    "Cardiologist",
    "Neurologist",
    "Gynecologist",
    "Watchman",
    "Peon",
    "Accountant",
  ],
  "Atlas News Agency": ["Journalist", "Watchman", "Peon", "Accountant"],
  "Redmarsh Police Department": ["Inspector", "Peon"],
  "Redmarsh Chemicals": [
    "Businessman",
    "Chemical Engineer",
    "Driver",
    "Lawyer",
    "Watchman",
    "Peon",
    "Accountant",
  ],
  Generico: [
    "Businessman",
    "Computer Engineer",
    "Chemical Engineer",
    "Driver",
    "Lawyer",
    "Watchman",
    "Peon",
    "Accountant",
  ],
};

const professionWorkPlace = {
  Professor: [],
  Cardiologist: [],
  Neurologist: [],
  Gynecologist: [],
  Optometrist: [],
  Businessman: [],
  Watchman: [],
  Ward: [],
  Nurse: [],
  Peon: [],
  Driver: [],
  Lawyer: [],
  Accountant: [],
  "Chemical Engineer": [],
  "Computer Engineer": [],
  Inspector: [],
  Artist: [""],
  Journalist: [],
  "Chief Executive Officer": ["Generico"],
};

for (const [workplace, profs] of Object.entries(workplaceProfession)) {
  profs.forEach((prof) => {
    professionWorkPlace[prof].push(workplace);
  });
}

const DeathReasons = [
  "Natural Causes",
  "Accident",
  "Illness",
  "Cancer",
  "Chemical Mishap",
  "Beast Attack",
  "Poisoning",
  "Battle Wounds",
];

const autopsyReasons = {
  "Accident": {
    findings: [
      `- Multiple fractures to the ribs and pelvis\n- Pulmonary lacerations with internal hemorrhage\n- Seatbelt marks and airbag deployment confirmed\n- Cause of death consistent with high-speed impact trauma`,
      `- Depressed skull fracture of the ${faker.helpers.arrayElement(['frontal', 'parietal', 'temporal'])} bone\n- Subdural hematoma present\n- Extensive contusions to the face and chest\n- No signs of foul play, consistent with accidental fall`,
      `- Compound fracture of the femur\n- Spinal injury noted at L${faker.number.int({min:1, max:5})} vertebra\n- Internal bleeding within abdominal cavity\n- Findings consistent with accidental blunt force trauma`
    ],
    conclusion: "Cause of death attributed to blunt force trauma sustained in an accidental event."
  },

  "Chemical Mishap": {
    findings: [
      `- Pulmonary edema with frothy fluid in airways\n- Gastric mucosal erosions\n- Hepatic necrosis and renal congestion\n- Toxicology confirmed lethal dose of ${faker.helpers.arrayElement(['cyanide', 'arsenic', 'methanol', 'chloroform'])}`,
      `- Widespread petechial hemorrhages\n- Severe cerebral edema noted\n- Toxicological analysis detected ${faker.helpers.arrayElement(['carbon monoxide', 'phosgene gas', 'sarin'])} exposure\n- No external trauma observed`,
      `- Erosions in esophagus and stomach\n- Severe chemical burns in oropharynx\n- Pulmonary congestion and alveolar damage\n- Blood tests revealed elevated ${faker.helpers.arrayElement(['lead', 'mercury', 'organophosphates'])} levels`
    ],
    conclusion: "Cause of death determined to be acute chemical intoxication."
  },

  "Beast Attack": {
    findings: [
      `- Multiple deep lacerations and puncture wounds to torso and limbs\n- Vascular rupture leading to exsanguination\n- Bite mark spacing consistent with ${faker.helpers.arrayElement(['Tiger', 'Leopard', 'bear'])} dentition\n- Extensive tearing of soft tissue`,
      `- Crushing injuries to the thoracic cavity\n- Severe claw-induced abrasions across the back\n- Massive hemorrhage evident in chest cavity\n- Defensive wounds on forearms suggesting struggle`,
      `- Partial avulsion of soft tissues in lower extremities\n- Penetrating injuries with irregular wound margins\n- Vertebral fractures at T${faker.number.int({min:2, max:9})}\n- Evidence consistent with predatory animal attack`
    ],
    conclusion: "Cause of death due to exsanguination from animal-inflicted trauma."
  },

  "Poisoning": {
    findings: [
      `- Gastric mucosa erosion consistent with corrosive ingestion\n- Pulmonary congestion and cerebral edema noted\n- Toxicology detected lethal concentration of ${faker.helpers.arrayElement(['cyanide', 'strychnine', 'ricin'])}\n- No evidence of external trauma`,
      `- Multiple organ congestion observed\n- Renal tubular necrosis evident\n- Toxicological screening positive for ${faker.helpers.arrayElement(['barbiturates', 'opioids', 'benzodiazepines'])}\n- Circumstances suggest ingestion of toxic substance`,
      `- Frothy fluid in airways\n- Hepatic and renal degeneration identified\n- Blood sample confirmed elevated ${faker.helpers.arrayElement(['alcohol', 'ethylene glycol', 'heroin'])} levels\n- Findings consistent with fatal poisoning`
    ],
    conclusion: "Cause of death due to systemic poisoning."
  },

  "Battle Wounds": {
    findings: [
      `- Penetrating wound to thoracic cavity\n- Major vessel injury with profuse internal bleeding\n- Projectile lodged near T${faker.number.int({min:3, max:8})} vertebra\n- Gunshot residue confirmed on clothing`,
      `- Multiple sharp force injuries to abdomen\n- Laceration of liver and stomach\n- Extensive hemorrhage within peritoneal cavity\n- Weapon type consistent with combat knife`,
      `- Compound fractures of the radius and ulna\n- Deep penetrating wound to chest\n- Pulmonary collapse and massive hemothorax\n- Findings consistent with battle-related trauma`
    ],
    conclusion: "Cause of death due to hemorrhagic shock secondary to battle-related injuries."
  }
}

const specialRequests = [
  "Requires flexible working hours due to a new child being born.",
  "Needs accommodation for a medical condition.",
  "Requests a standing desk for ergonomic reasons.",
  "Prefers remote work on Fridays.",
  "No special requests at this time.",
];

function generateBirthRecords(
  firstName,
  lastName,
  birthDate,
  gender,
  fatherName = null,
  motherName = null
) {
  if (!fatherName) fatherName = faker.person.firstName("male") + " " + lastName;
  if (!motherName)
    motherName = faker.person.firstName("female") + " " + lastName;

  let data = {
    id: uuidv4(),
    childName: firstName + " " + lastName,
    dateOfBirth: birthDate.toISOString().split("T")[0],
    timeOfBirth: birthDate.toTimeString().split(" ")[0],
    gender: gender,
    placeOfBirth: "Redmarsh, Nocturna, Zorik",
    fatherName: fatherName,
    motherName: motherName,
    certificateNumber: `BC-${birthDate.getFullYear()}-${faker.string.numeric(
      6
    )}`,
    registrar: "Office of the Civil Registrar",
  };

  //   console.log(data);

  birthRecords.push(data);
}

function generateDeathRecords(
  firstName,
  lastName,
  birthDate,
  deathDate,
  causeOfDeath = null,
  doctor = null,
  examiner = null
) {
  let data = {
    id: uuidv4(),
    fullName: firstName + " " + lastName,
    dateOfBirth: birthDate.toISOString().split("T")[0],
    dateOfDeath: deathDate.toISOString().split("T")[0],
    age: Math.floor((deathDate - birthDate) / (1000 * 60 * 60 * 24 * 365)),
    causeOfDeath: causeOfDeath || faker.helpers.arrayElement(DeathReasons),
    placeOfDeath: "Redmarsh, Nocturna, Zorik",
    certificateNumber: `DC-${deathDate.getFullYear()}-${faker.string.numeric(
      6
    )}`,
    registrar: "Office of the Civil Registrar",
  };

  if (doctor) data.doctor = doctor;
  if (examiner) data.examiner = examiner;
  if (Object.keys(autopsyReasons).includes(data.causeOfDeath)) {
    const id = uuidv4().substring(0, 8).toUpperCase()
    const autopsyData = {
      id: id,
      caseNumber: `AUT-${deathDate.getFullYear()}-${id}`,
      name: data.fullName,
      age: data.age,
      gender: data.gender,
      dateOfDeath: data.dateOfDeath,
      dateOfExamination: data.dateOfDeath,
      location: `${faker.location.city()} Medical Examiner's Office`,
      causeOfDeath: data.causeOfDeath,
      findings: faker.helpers.arrayElement(autopsyReasons[data.causeOfDeath].findings),
      conclusion: autopsyReasons[data.causeOfDeath].conclusion,
    }
    if(doctor) autopsyData.examiner = doctor;
    autopsyReports.push(autopsyData);

  }

  deathRecords.push(data);
}

function generateEmploymentRecord(
  firstName,
  lastName,
  birthDate,
  address,
  profession
) {
  let university = "University of Redmarsh";
  if (medicalProfessions.includes(profession)) {
    university = "St. Healmore Medical College";
    if (profession === "Optometrist")
      university = "Kingsborough College of Optometry";
  }
  let data = {
    id: uuidv4(),
    fullName: `${firstName} ${lastName}`,
    dob: birthDate.toISOString().split("T")[0],
    address: address,
    contact: faker.phone.number(),
    email: faker.internet.email({ firstName, lastName }),
    qualification: profession,
    university: university,
    yearOfPassing: birthDate.getFullYear() + 22,
    specialRequests: faker.helpers.arrayElement(specialRequests),
    needStaffQuarter: faker.datatype.boolean(0.3),
    company: faker.helpers.arrayElement(professionWorkPlace[profession]),
  };

  employmentRecords.push(data);
}

function updateDoctors() {
  deathRecords.forEach((record) => {
    if (record.doctor) return;
    record.doctor = faker.helpers.arrayElement(doctors);
    record.examiner = faker.helpers.arrayElement(doctors);
  });
  autopsyReports.forEach((report)=>{
    if (report.examiner) return;
    report.examiner = faker.helpers.arrayElement(doctors);
  })
}

function createFamily(_name, _lastName, _gender, _age, _married, _deathDate, _employment) {
  //   Generating Base info for family
  const gender = _gender || faker.helpers.arrayElement(["Male", "Female"]);
  const firstName = _name || faker.person.firstName(
    gender === "Male" ? "male" : "female"
  );
  const lastName = _lastName || faker.person.lastName();
  const age = _age || faker.number.int({ min: 18, max: 80 });
  const married = _married || faker.datatype.boolean(0.9);
  let spouse, childCount, childrens;

  if (married) {
    spouse = faker.person.firstName(gender == "Male" ? "female" : "male");
    if (age < 23) childCount = 0;
    else childCount = faker.number.int({ min: 0, max: 5 });
    childrens = Array.from({ length: childCount }, () =>
      faker.person.firstName()
    );
  }

  //   Generating birth records
  const birthDateMain = faker.date.birthdate({
    mode: "age",
    min: age,
    max: age,
    refDate: _deathDate || new Date("July 17, 2005")
  });
  let birthDateSpouse, childrensBirthDate;
  if (married) {
    birthDateSpouse = faker.date.birthdate({
      mode: "age",
      min: age - 5,
      max: age + 5,
      refDate: new Date("July 17, 2005")
    });
    childrensBirthDate = Array.from({ length: childCount }, () =>
      faker.date.birthdate({ mode: "age", min: 0, max: age - 23, refDate: new Date("July 17, 2005") })
    );
  }

  generateBirthRecords(firstName, lastName, birthDateMain, gender);
  if (married) {
    generateBirthRecords(
      spouse,
      lastName,
      birthDateSpouse,
      gender == "Male" ? "female" : "male"
    );
    childrens.forEach((child, index) => {
      generateBirthRecords(
        child,
        lastName,
        childrensBirthDate[index],
        faker.helpers.arrayElement(["male", "female"]),
        `${firstName} ${lastName}`,
        `${spouse} ${lastName}`
      );
    });
  }
  const address =
    faker.location.streetAddress(true) + ", " + "Redmarsh, Nocturna, Zorik";

  //   generating professions and work place
  const profession = faker.helpers.arrayElement(professions);
  const workplace = faker.helpers.arrayElement(workplaces);
  let spouseProfession, spouseWorkplace;
  if (married) {
    spouseProfession = faker.helpers.arrayElement(professions);
    spouseWorkplace = faker.helpers.arrayElement(workplaces);
  }

  if (medicalProfessions.includes(profession)) {
    doctors.push(`${firstName} ${lastName}`);
    alumniRecords.push({
      name: `Dr. ${firstName} ${lastName}`,
      rollNumber: `MD${birthDateMain.getFullYear() + 22}-${faker.number.int({
        min: 1,
        max: 60,
      })}`,
      degree: "MBBS",
      batch: `${birthDateMain.getFullYear() + 17}`,
      graduationYear: `${birthDateMain.getFullYear() + 22}`,
      specialization: profession,
      currentEmployment: "Lead Surgeon, Redmarsh Healthcare",
    });
  }
  if (medicalProfessions.includes(spouseProfession)) {
    doctors.push(`${spouse} ${lastName}`);
    alumniRecords.push({
      name: `Dr. ${spouse} ${lastName}`,
      rollNumber: `MD${birthDateSpouse.getFullYear() + 22}-${faker.number.int({
        min: 1,
        max: 60,
      })}`,
      degree: "MBBS",
      batch: `${birthDateSpouse.getFullYear() + 17}`,
      graduationYear: `${birthDateSpouse.getFullYear() + 22}`,
      specialization: profession,
      currentEmployment: "Lead Surgeon, Redmarsh Healthcare",
    });
  }

  generateEmploymentRecord(
    firstName,
    lastName,
    birthDateMain,
    address,
    profession
  );
  if (married)
    generateEmploymentRecord(
      spouse,
      lastName,
      birthDateSpouse,
      address,
      spouseProfession
    );

  //   Generate employmenet record

  //   generating death certificates
  const isDead = _deathDate || faker.datatype.boolean(0.1);
  const deathDate = isDead
    ? _deathDate || faker.date.between({ from: birthDateMain, to: new Date("July 17, 2005") })
    : null;
  let spouseDeathDate, isSpouseDead, childrensDeathDate, childrensDeath;
  if (married) {
    isSpouseDead = faker.datatype.boolean(0.1);
    spouseDeathDate = isSpouseDead
      ? faker.date.between({ from: birthDateSpouse, to: new Date("July 17, 2005") })
      : null;
    childrensDeath = childrensBirthDate.map(() => faker.datatype.boolean(0.05));
    childrensDeathDate = childrensDeath.map((died, index) =>
      died
        ? faker.date.between({
            from: childrensBirthDate[index],
            to: new Date("July 17, 2005"),
          })
        : null
    );
  }

  if (isDead)
    generateDeathRecords(firstName, lastName, birthDateMain, deathDate);
  if (married) {
    if (isSpouseDead)
      generateDeathRecords(spouse, lastName, birthDateSpouse, spouseDeathDate);
    childrens.forEach((child, index) => {
      if (childrensDeath[index])
        generateDeathRecords(
          child,
          lastName,
          childrensBirthDate[index],
          childrensDeathDate[index]
        );
    });
  }

  return {
    person: {
      fullName: `${firstName} ${lastName}`,
      gender,
      age,
      birthDate: birthDateMain,
      profession,
      workplace,
      isDead,
      deathDate,
      address
    },
    family: married
      ? {
          spouse: {
            name: spouse,
            birthDate: birthDateSpouse,
            profession: spouseProfession,
            workplace: spouseWorkplace,
            deathDate: spouseDeathDate,
          },
          childrens: childrens.map((child, idx) => ({
            name: child,
            birthDate: childrensBirthDate[idx],
            isDead: childrensDeath[idx],
            deathDate: childrensDeathDate[idx],
          })),
        }
      : null,
  };
}

function AddStaticData() {
  let dateWithTime = (date) => {
    date.setTime(date.getTime() + Math.random() * 86400000);
    return date;
  };
  // All static people data
  generateBirthRecords(
    "Cletus",
    "Blick",
    dateWithTime(new Date("December 09, 1963")),
    "Male",
    "Raj Blick",
    "Sita Blick"
  );
  generateEmploymentRecord(
    "Cletus",
    "Blick",
    dateWithTime(new Date("December 09, 1963")),
    "Flat 3A, Doctor's Residency, Health Sector 4, Heartline Road, Redmarsh",
    "Neurologist"
  );
  generateDeathRecords(
    "Cletus",
    "Blick",
    dateWithTime(new Date("December 09, 1963")),
    dateWithTime(new Date("May 03, 2005"))
  );

  generateBirthRecords(
    "James",
    "Anderson",
    dateWithTime(new Date("April 22, 1977")),
    "Male",
    "Robert Anderson"
  );
  generateEmploymentRecord(
    "James",
    "Anderson",
    dateWithTime(new Date("April 22, 1977")),
    "Suite 42, Skyline Tower, Innovation District, Redmarsh",
    "Chief Executive Officer"
  );
  generateDeathRecords(
    "James",
    "Anderson",
    dateWithTime(new Date("April 22, 1977")),
    dateWithTime(new Date("July 10, 2005"))
  );

  generateBirthRecords(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1977")),
    "Male"
  );
  generateEmploymentRecord(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1977")),
    "Flat 3A, Doctor's Residency, Heartline Road, Redmarsh",
    "Cardiologist"
  );
  generateDeathRecords(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1977")),
    dateWithTime(new Date("August 11, 2005"))
  );

  generateBirthRecords(
    "Hubert",
    "Lowe",
    dateWithTime(new Date("July 22, 1977")),
    "Male",
    "Matt Lowe"
  );
  generateEmploymentRecord(
    "Hubert",
    "Lowe",
    dateWithTime(new Date("July 22, 1977")),
    "House 12, Greenview Apartments, Heartline Road, Redmarsh",
    "Cardiologist"
  );

  generateBirthRecords(
    "John",
    "Carter",
    dateWithTime(new Date("September 22, 1985")),
    "Male",
    "Michael Carter"
  );
  generateEmploymentRecord(
    "John",
    "Carter",
    dateWithTime(new Date("September 22, 1985")),
    "Flat 7C, Doctor's Residency, Heartline Road, Redmarsh",
    "Optometrist"
  );

  generateBirthRecords(
    "Olive",
    "Harris",
    dateWithTime(new Date("July 22, 1982")),
    "Male"
  );
  generateEmploymentRecord(
    "Olive",
    "Harris",
    dateWithTime(new Date("July 22, 1982")),
    "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh",
    "Inspector"
  );

  generateBirthRecords(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1981")),
    "Male",
    "Edward Sullivan"
  );
  generateEmploymentRecord(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1981")),
    "221 Oakridge Lane, Westbridge, Redmarsh",
    "Inspector"
  );
  generateDeathRecords(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1981")),
    dateWithTime(new Date("January 30, 2005"))
  );

  generateBirthRecords(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1981")),
    "Male",
    "Andrew Thompson"
  );
  generateEmploymentRecord(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1981")),
    "Apartment 7C, Willow Lane, Redmarsh, Midwest",
    "Journalist"
  );
  generateDeathRecords(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1981")),
    dateWithTime(new Date("February 05, 2005"))
  );

  generateBirthRecords(
    "Samuel",
    "Hayes",
    dateWithTime(new Date("March 15, 1978")),
    "Male",
    "Robert Hayes"
  );
  generateEmploymentRecord(
    "Samuel",
    "Hayes",
    dateWithTime(new Date("March 15, 1978")),
    "Suite 12B, Willow Lane Residences, Redmarsh City",
    "Ward"
  );

  doctors.push("Cletus Blick");
  doctors.push("Hubert Lowe");
  doctors.push("Hubert Lowe");

  // data for people who were trafficked
  createFamily("Dale", "Grady", "Male", 30, true, new Date("September 12, 2004"))
  createFamily("May", "Bayer", "Female", 42, true, new Date("October 18, 2004"))
  createFamily("Beverly", "Jakubowski", "Female", 20, false, new Date("November 10, 2004"))
  createFamily("Clint", "Barrows", "Male", 50, false, new Date("December 15, 2004"))
  // Detective background
  let detective = createFamily("David", "Hill", "Male", 50, true)
  generateBirthRecords("Roxanne", "Hill", new Date("November 10, 1979"), "Female", "David Hill")
  generateEmploymentRecord("Roxanne", "Hill", new Date("November 10, 1979"), detective.address, "Computer Engineer")
  generateDeathRecords("Roxanne", "Hill", new Date("November 10, 1979"), new Date("January 20, 2005"), "Accident", "Hubert Lowe", "Cletus Blick")

  // Antagonist
  createFamily("Roger", "Hintz", "Male", 25, false, false, "Computer Engineer")
}

function updateAlumniRecords() {
  fs.readFile("src/assets/college/alumniRecords.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading alumni records file:", err);
      return;
    }
    data = JSON.parse(data);
    data.push(...alumniRecords);
    fs.writeFileSync(
      "src/assets/college/alumniRecords.json",
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  });
}

AddStaticData();
for (let i = 0; i < 100; i++) {
  createFamily();
  updateDoctors();
  // Updating files with records
  if (birthRecordsFile) {
    fs.writeFileSync(
      "src/assets/birth_records.json",
      JSON.stringify(birthRecords, null, 2),
      "utf-8"
    );
  }
  if (deathRecordsFile) {
    fs.writeFileSync(
      "src/assets/death_records.json",
      JSON.stringify(deathRecords, null, 2),
      "utf-8"
    );
  }
  if (employmentRecordsFile) {
    fs.writeFileSync(
      "src/assets/employment_records.json",
      JSON.stringify(employmentRecords, null, 2),
      "utf-8"
    );
  }
  if (alumniRecords) updateAlumniRecords();
  if( autopsyReports.length > 0 ){
    fs.writeFileSync(
      "src/assets/autopsy_reports.json",
      JSON.stringify(autopsyReports, null, 2),
      "utf-8"
    );
  }
}
