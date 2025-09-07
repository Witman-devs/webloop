import { faker } from "@faker-js/faker";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const birthRecordsFile = true;
const deathRecordsFile = true;
const employmentRecordsFile = true;

const birthRecords = [];
const deathRecords = [];
const employmentRecords = [];

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
  "Generico": [
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

const professionWorkPlace = {  "Professor":[],
  "Cardiologist":[],
  "Neurologist":[],
  "Gynecologist":[],
  "Optometrist":[],
  "Businessman":[],
  "Watchman":[],
  "Ward":[],
  "Nurse":[],
  "Peon":[],
  "Driver":[],
  "Lawyer":[],
  "Accountant":[],
  "Chemical Engineer":[],
  "Computer Engineer":[],
  "Inspector":[],
  "Artist":[""],
  "Journalist":[],
  "Cheif Executive Officer":["Generico"]
}

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
    'Requires flexible working hours due to a new child being born.',
    'Needs accommodation for a medical condition.',
    'Requests a standing desk for ergonomic reasons.',
    'Prefers remote work on Fridays.',
    'No special requests at this time.'
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

function generateDeathRecords(firstName, lastName, birthDate, deathDate) {
  let data = {
    id: uuidv4(),
    fullName: firstName + " " + lastName,
    dateOfBirth: birthDate.toISOString().split("T")[0],
    dateOfDeath: deathDate.toISOString().split("T")[0],
    age: Math.floor((deathDate - birthDate) / (1000 * 60 * 60 * 24 * 365)),
    causeOfDeath: faker.helpers.arrayElement(DeathReasons),
    placeOfDeath: "Redmarsh, Nocturna, Zorik",
    certificateNumber: `DC-${deathDate.getFullYear()}-${faker.string.numeric(
      6
    )}`,
    registrar: "Office of the Civil Registrar",
  };

  //   console.log(data);

  deathRecords.push(data);
}

function generateEmploymentRecord(firstName, lastName, birthDate, address, profession){
  let university = "University of Redmarsh";
  if (medicalProfessions.includes(profession)){
    university = "St. Healmore Medical College";
    if(profession === "Optometrist") university = "Kingsborough College of Optometry";
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

  if (medicalProfessions.includes(profession))
    doctors.push(`${firstName} ${lastName}`);
  if (medicalProfessions.includes(spouseProfession))
    doctors.push(`${spouse} ${lastName}`);

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

function AddStaticData(){
// All static people data
  generateBirthRecords("Arjun", "Verma", new Date("December 09, 1963"), "Male", "Raj Verma", "Sita Verma");
  generateEmploymentRecord("Arjun", "Verma", new Date("December 09, 1963"), "Flat 3A, Doctor's Residency, Health Sector 4, Heartline Road, Redmarsh", "Neurologist");
  generateDeathRecords("Arjun", "Verma", new Date("December 09, 1963"), new Date("September 14, 2023"));

  generateBirthRecords("James", "Anderson", new Date("April 22, 1977"), "Male", "Robert Anderson");
  generateEmploymentRecord("James", "Anderson", new Date("April 22, 1977"), "Suite 42, Skyline Tower, Innovation District, Redmarsh", "Chief Executive Officer");
  generateDeathRecords("James", "Anderson", new Date("April 22, 1977"), new Date("November 20, 2023"));

  generateBirthRecords("Juan", "Martinez", new Date("July 22, 1982"), "Male");
  generateEmploymentRecord("Juan", "Martinez", new Date("July 22, 1982"), "Flat 3A, Doctor's Residency, Heartline Road, Redmarsh", "Surgeon");
  generateDeathRecords("Juan", "Martinez", new Date("July 22, 1982"), new Date("June 5, 2023"));

  generateBirthRecords("Rohan", "Mehta", new Date("July 22, 1982"), "Male", "Prakash Mehta");
  generateEmploymentRecord("Rohan", "Mehta", new Date("July 22, 1982"), "House 12, Greenview Apartments, Heartline Road, Redmarsh", "Cardiologist");

  generateBirthRecords("John", "Carter", new Date("September 22, 1985"), "Male", "Michael Carter");
  generateEmploymentRecord("John", "Carter", new Date("September 22, 1985"), "Flat 7C, Doctor's Residency, Heartline Road, Redmarsh", "Optometrist");

  generateBirthRecords("Amarjit", "Singh", new Date("July 22, 1982"), "Male");
  generateEmploymentRecord("Amarjit", "Singh", new Date("July 22, 1982"), "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh", "Inspector");

  generateBirthRecords("Mark", "Sullivan", new Date("July 22, 1983"), "Male", "Edward Sullivan");
  generateEmploymentRecord("Mark", "Sullivan", new Date("July 22, 1983"), "221 Oakridge Lane, Westbridge, Redmarsh", "Inspector");
  generateDeathRecords("Mark", "Sullivan", new Date("July 22, 1983"), new Date("April 9, 2023"));

  generateBirthRecords("Michael", "Thompson", new Date("May 14, 1985"), "Male", "Andrew Thompson");
  generateEmploymentRecord("Michael", "Thompson", new Date("May 14, 1985"), "Apartment 7C, Willow Lane, Redmarsh, Midwest", "Journalist");
  generateDeathRecords("Michael", "Thompson", new Date("May 14, 1985"), new Date("April 20, 2023"));

  generateBirthRecords("Samuel", "Hayes", new Date("March 15, 1978"), "Male", "Robert Hayes");
  generateEmploymentRecord("Samuel", "Hayes", new Date("March 15, 1978"), "Suite 12B, Willow Lane Residences, Redmarsh City", "Ward");

  // data for people who were trafficked
}

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
  if(employmentRecordsFile){
    fs.writeFileSync(
      "src/assets/employment_records.json",
      JSON.stringify(employmentRecords, null, 2),
      "utf-8"
    );
  }
}

