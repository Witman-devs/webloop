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
  //   console.log(data);

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
}

function createFamily() {
  //   Generating Base info for family
  const gender = faker.helpers.arrayElement(["Male", "Female"]);
  const firstName = faker.person.firstName(
    gender === "Male" ? "male" : "female"
  );
  const lastName = faker.person.lastName();
  const age = faker.number.int({ min: 18, max: 80 });
  const married = faker.datatype.boolean(0.9);
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
  });
  let birthDateSpouse, childrensBirthDate;
  if (married) {
    birthDateSpouse = faker.date.birthdate({
      mode: "age",
      min: age - 5,
      max: age + 5,
    });
    childrensBirthDate = Array.from({ length: childCount }, () =>
      faker.date.birthdate({ mode: "age", min: 0, max: age - 23 })
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
      rollNumber: `MD${birthDateMain.getFullYear()+22}-${faker.number.int({min:1, max:60})}`,
      degree: "MBBS",
      batch: `${birthDateMain.getFullYear()+17}`,
      graduationYear: `${birthDateMain.getFullYear()+22}`,
      specialization: profession,
      currentEmployment: "Lead Surgeon, Redmarsh Healthcare",
    });
  }
  if (medicalProfessions.includes(spouseProfession)){
    doctors.push(`${spouse} ${lastName}`);
    alumniRecords.push({
      name: `Dr. ${spouse} ${lastName}`,
      rollNumber: `MD${birthDateSpouse.getFullYear()+22}-${faker.number.int({min:1, max:60})}`,
      degree: "MBBS",
      batch: `${birthDateSpouse.getFullYear()+17}`,
      graduationYear: `${birthDateSpouse.getFullYear()+22}`,
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
  const isDead = faker.datatype.boolean(0.1);
  const deathDate = isDead
    ? faker.date.between({ from: birthDateMain, to: new Date() })
    : null;
  let spouseDeathDate, isSpouseDead, childrensDeathDate, childrensDeath;
  if (married) {
    isSpouseDead = faker.datatype.boolean(0.1);
    spouseDeathDate = isSpouseDead
      ? faker.date.between({ from: birthDateSpouse, to: new Date() })
      : null;
    childrensDeath = childrensBirthDate.map(() => faker.datatype.boolean(0.05));
    childrensDeathDate = childrensDeath.map((died, index) =>
      died
        ? faker.date.between({
            from: childrensBirthDate[index],
            to: new Date(),
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
    dateWithTime(new Date("September 14, 2023"))
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
    dateWithTime(new Date("November 20, 2023"))
  );

  generateBirthRecords(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1982")),
    "Male"
  );
  generateEmploymentRecord(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1982")),
    "Flat 3A, Doctor's Residency, Heartline Road, Redmarsh",
    "Cardiologist"
  );
  generateDeathRecords(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1982")),
    dateWithTime(new Date("June 5, 2023"))
  );

  generateBirthRecords(
    "Hubert",
    "Lowe",
    dateWithTime(new Date("July 22, 1982")),
    "Male",
    "Matt Lowe"
  );
  generateEmploymentRecord(
    "Hubert",
    "Lowe",
    dateWithTime(new Date("July 22, 1982")),
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
    dateWithTime(new Date("July 22, 1983")),
    "Male",
    "Edward Sullivan"
  );
  generateEmploymentRecord(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1983")),
    "221 Oakridge Lane, Westbridge, Redmarsh",
    "Inspector"
  );
  generateDeathRecords(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1983")),
    dateWithTime(new Date("April 9, 2023"))
  );

  generateBirthRecords(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1985")),
    "Male",
    "Andrew Thompson"
  );
  generateEmploymentRecord(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1985")),
    "Apartment 7C, Willow Lane, Redmarsh, Midwest",
    "Journalist"
  );
  generateDeathRecords(
    "Michael",
    "Thompson",
    dateWithTime(new Date("May 14, 1985")),
    dateWithTime(new Date("April 20, 2023"))
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
}

function updateAlumniRecords(){
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
  })
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
  if(alumniRecords) updateAlumniRecords();
}
