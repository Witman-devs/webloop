import { faker } from "@faker-js/faker";
import { time } from "console";
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
const checkInRecords = [];

const doctors = [];
const postal = [];
const RedmarshChemicals = [];
const UniverseMap = {};
let UniverseList = []

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
  "Delivery driver"
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
  "Redmarsh Postal Services"
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
    "Accountant",
    "Lawyer",
    "Watchman",
    "Peon",
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
  "Redmarsh Postal Services": [
    "Businessman",
    "Delivery driver",
    "Lawyer",
    "Watchman",
    "Peon",
    "Accountant",
  ]
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
  "Delivery driver": []
};

for (const [workplace, profs] of Object.entries(workplaceProfession)) {
  profs.forEach((prof) => {
    professionWorkPlace[prof].push(workplace);
  });
}

const DeathReasons = [
  "Natural Causes",
  "Illness",
  "Cancer",
  "Accident",
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
  },
  "Murder": {
    "findings": [
      "- Multiple stab wounds to the anterior chest wall\n- Penetration of left lung and pericardium\n- Massive internal hemorrhage noted\n- Defensive wounds observed on forearms and hands",
      "- Single deep stab wound to the abdomen, perforating the liver\n- Secondary superficial wounds around thoracic cavity\n- Blood loss exceeding 2 liters within abdominal cavity\n- Clear signs of struggle and resistance",
      "- Multiple incised wounds across the neck region\n- Jugular vein and trachea severed\n- Surrounding bruising consistent with forceful assault\n- No evidence suggesting self-inflicted injury",
      "- Series of angled stab wounds to the back\n- Wounds consistent with assailant attacking from behind\n- Lung and kidney lacerations observed\n- Lack of defensive wounds suggesting incapacitation before fatal injuries"
    ],
    "conclusion": "Cause of death determined as homicidal sharp-force trauma, with fatal injuries caused by repeated stabbing with a knife."
  },
  "Suicide": {
    "findings": [
      "- Prominent ligature mark encircling the neck, positioned above the thyroid cartilage\n- Petechial hemorrhages in the conjunctiva and eyelids\n- Fracture of the hyoid bone observed\n- Tongue protrusion consistent with asphyxia",
      "- Oblique ligature mark extending upward behind the left ear\n- Cyanosis of lips and nail beds\n- Engorgement of neck veins noted\n- No signs of external struggle or defensive injuries",
      "- Deep rope impression around the neck with parchment-like skin changes\n- Salivary dribbling observed from the mouth\n- Fracture of thyroid cartilage confirmed\n- Findings strongly suggest suicidal hanging"
    ],
    "conclusion": "Cause of death determined as suicide by hanging with a rope, with asphyxial features and absence of homicidal evidence."
  },
  "Gunshot Wound": {
    "findings": [
      `- Entry wound at ${faker.number.int({ min: 2, max: 5 })}th intercostal space, right anterior chest\n- Soot deposition and stippling within ${faker.number.int({ min: 5, max: 15 })} cm radius around entry\n- Bullet trajectory consistent with a close-range discharge\n- Projectile lodged near T${faker.number.int({ min: 3, max: 7 })} vertebra`,
      `- Single gunshot wound to the abdomen\n- Entry wound ${faker.number.float({ min: 0.7, max: 1.2, precision: 0.1 })} cm in diameter, surrounded by abrasion collar\n- Perforation of liver and stomach noted\n- Internal hemorrhage exceeding ${faker.number.int({ min: 1200, max: 2500 })} mL in peritoneal cavity`,
      `- Gunshot wound to the head with entry at right temporal region\n- Skull fracture extending across parietal bone\n- Extensive brain laceration and subdural hemorrhage present\n- Projectile recovered deformed adjacent to the occipital lobe`,
      `- Two gunshot wounds identified: one in the thorax, one in the upper limb\n- Thoracic wound penetrated lung tissue causing hemothorax (~${faker.number.int({ min: 800, max: 1600 })} mL blood)\n- Upper limb wound traversed soft tissue, non-fatal\n- Trajectory indicates assailant at lower angle relative to victim`
    ],
    "conclusion":
      "Cause of death determined as firearm-related ballistic trauma, with fatal injuries resulting in massive hemorrhage and organ perforation. Manner of death: homicide."
  }
}

const specialRequests = [
  "Requires flexible working hours due to a new child being born.",
  "Needs accommodation for a medical condition.",
  "Requests a standing desk for ergonomic reasons.",
  "Prefers remote work on Fridays.",
  "No special requests at this time.",
];

function calculateAgeAtDate(dob, dod) {

  if(!dod || dod == undefined || dod == null) dod = new Date("07/17/2005")

  let age = dod.getFullYear() - dob.getFullYear();

  // Check if birthday had not occurred yet in year of death
  const beforeBirthday = 
    dod.getMonth() < dob.getMonth() || 
    (dod.getMonth() === dob.getMonth() && dod.getDate() < dob.getDate());

  if (beforeBirthday) {
    age -= 1;
  }

  return age;
}

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

  let admissionDate = new Date(deathDate.getTime() - 2 * 60 * 60 * 1000)
  if(["Natural Causes","Illness","Cancer",].includes(data.causeOfDeath))
    admissionDate = new Date(deathDate.getTime() - Math.random() * 5 * 24 * 60 *60*1000)

  checkInRecords.push({
    "date": admissionDate,
    "time": timeStamp(admissionDate),
    "name": data.fullName,
    "comment": "Admitted to the hospital",
    "signature": data.fullName.split(" ").map(val=>val[0]).join(" "),
    "place": "Redmarsh Healthcare"
  })

  deathRecords.push(data);
  return admissionDate
}

function generateEmploymentRecord(
  firstName,
  lastName,
  birthDate,
  address,
  profession,
  company
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
    company: company || faker.helpers.arrayElement(professionWorkPlace[profession]),
  };

  if(data.company == "Redmarsh Chemicals" && ["Businessman","Chemical Engineer","Driver","Accountant","Lawyer"].includes(data.qualification))
    RedmarshChemicals.push(data.fullName)

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

function createFamily(_name, _lastName, _gender, _age, _married, _deathDate, _profession, _workplace) {
  //   Generating Base info for family
  const gender = _gender || faker.helpers.arrayElement(["Male", "Female"]);
  let firstName = _name || faker.person.firstName(
    gender === "Male" ? "male" : "female"
  );
  let lastName = _lastName || faker.person.lastName();
  while(UniverseMap[`${firstName} ${lastName}`]){
    firstName = faker.person.firstName(
      gender === "Male" ? "male" : "female"
    );
    lastName = faker.person.lastName();
  }
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

  const profession = _profession || faker.helpers.arrayElement(professions);
  const workplace = _workplace || faker.helpers.arrayElement(workplaces);
  let spouseProfession, spouseWorkplace;
  if (married) {
    spouseProfession = faker.helpers.arrayElement(professions);
    spouseWorkplace = faker.helpers.arrayElement(workplaces);
  }

  if (medicalProfessions.includes(profession)) {
    if(workplace=="Redmarsh Healthcare") doctors.push(`${firstName} ${lastName}`);
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
      currentEmployment: "Surgeon, Redmarsh Healthcare",
    });
  }
  if (medicalProfessions.includes(spouseProfession)) {
    if(spouseWorkplace == "Redmarsh Healthcare")doctors.push(`${spouse} ${lastName}`);
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
      currentEmployment: "Surgeon, Redmarsh Healthcare",
    });
  }

  if(profession == "Delivery driver") postal.push(`${firstName} ${lastName}`)
  if(spouseProfession ==   "Delivery driver") postal.push(` ${spouse} ${lastName}`)

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

  UniverseMap[`${firstName} ${lastName}`] = {
    fullName: `${firstName} ${lastName}`,
    age: age,
    birthDate: birthDateMain,
    profession: profession,
    "workplace": workplace,
    deathDate: deathDate,
    address: address
  }

  if(married)
    UniverseMap[`${spouse} ${lastName}`] = {
      fullName: `${spouse} ${lastName}`,
      age: calculateAgeAtDate(birthDateSpouse, spouseDeathDate),
      birthDate: birthDateSpouse,
      profession: spouseProfession,
      "workplace": spouseWorkplace,
      deathDate: spouseDeathDate,
      address: address
    }
  for(let i=0;i<childCount;i++){

    UniverseMap[`${childrens[i]} ${lastName}`] = {
      fullName: `${childrens[i]} ${lastName}`,
      age: calculateAgeAtDate(childrensBirthDate[i], childrensDeathDate[i]),
      birthDate: childrensBirthDate[i],
      deathDate: childrensDeathDate[i],
      address: address
    }
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
    "Neurologist",
    "Redmarsh Healthcare"
  );
  generateDeathRecords(
    "Cletus",
    "Blick",
    dateWithTime(new Date("December 09, 1963")),
    dateWithTime(new Date("May 03, 2005")),
    "Murder"
  );

  UniverseMap["Cletus Blick"] = {
    firstName: "Cletus",
    lastName: "Blick",
    fullName: "Cletus Blick",
    age: 42,
    birthDate: new Date("December 09, 1963"),
    profession: "Neurologist",
    workplace: "Redmarsh Healthcare",
    deathDate: new Date("May 03, 2005"),
    address: "Flat 3A, Doctor's Residency, Health Sector 4, Heartline Road, Redmarsh"
  }

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
    dateWithTime(new Date("July 10, 2005")),
    "Murder"
  );

  UniverseMap["James Anderson"] = {
      firstName: "James",
      lastName: "Anderson",
      fullName: "James Anderson",
      birthDate: new Date("April 22, 1977"),
      profession: "Chief Executive Officer",
      workplace: "Genrico",
      deathDate: new Date("July 10, 2005"),
      address: "Suite 42, Skyline Tower, Innovation District, Redmarsh"
  }

  UniverseMap["Juan Martinez"] = {
    firstName: "Juan",
    lastName: "Martinez",
    fullName: "Juan Martinez",
    birthDate: new Date("July 22, 1977"),
    profession: "Cardiologist",
    workplace: "Redmarsh Healthcare",
    deathDate: new Date("August 11, 2005"),
    address: "Flat 9C, Doctor's Residency, Heartline Road, Redmarsh",
  };
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
    "Flat 9C, Doctor's Residency, Heartline Road, Redmarsh",
    "Cardiologist",
    "Redmarsh Healthcare"
  );
  generateDeathRecords(
    "Juan",
    "Martinez",
    dateWithTime(new Date("July 22, 1977")),
    dateWithTime(new Date("August 11, 2005")),
    "Suicide",
    "Hubert Lowe",
    "Cletus Blick"
  );

  
  UniverseMap["Hubert Lowe"] = {
    firstName: "Hubert",
    lastName: "Lowe",
    fullName: "Hubert Lowe",
    birthDate: new Date("July 22, 1977"),
    profession: "Cardiologist",
    workplace: "Redmarsh Healthcare",
    address: "House 12, Greenview Apartments, Heartline Road, Redmarsh"
  };

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



  UniverseMap["John Carter"] = {
    firstName: "John",
    lastName: "Carter",
    fullName: "John Carter",
    birthDate: new Date("September 22, 1985"),
    profession: "Optometrist",
    workplace: "Redmarsh Healthcare",
    address: "Flat 7C, Doctor's Residency, Heartline Road, Redmarsh"
  };

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

  // Currupt officer 
  UniverseMap["Olive Harris"] = {
    firstName: "Olive",
    lastName: "Harris",
    fullName: "Olive Harris",
    birthDate: new Date("July 22, 1982"),
    profession: "Inspector",
    workplace:  "Redmarsh Police Department",
    address: "221 Oakridge Lane, Westbridge, Redmarsh"
  };

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
    "221 Oakridge Lane, Westbridge, Redmarsh",
    "Inspector"
  );

  // Brother of curroupt officer
  UniverseMap["Sandy Harris"] = {
    firstName: "Sandy",
    lastName: "Harris",
    fullName: "Sandy Harris",
    birthDate: new Date("June 12, 1985"),
    profession: "Chemical Engineer",
    workplace: "Redmarsh Chemicals",
    address: "221 Oakridge Lane, Westbridge, Redmarsh"
  };
  generateBirthRecords(
    "Sandy",
    "Harris",
    dateWithTime(new Date("June 12, 1985")),
    "Male"
  );
  generateEmploymentRecord(
    "Sandy",
    "Harris",
    dateWithTime(new Date("June 12, 1985")),
    "221 Oakridge Lane, Westbridge, Redmarsh",
    "Chemical Engineer",
    "Redmarsh Chemicals"
  );

  // Inspector who died
  UniverseMap["Mark Sullivan"] = {
    firstName: "Mark",
    lastName: "Sullivan",
    fullName: "Mark Sullivan",
    birthDate: new Date("July 22, 1981"),
    profession: "Inspector",
    workplace:  "Redmarsh Police Department",
    address: "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh",
    deathDate: new Date("January 30, 2005"),
  };
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
    "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh",
    "Inspector"
  );
  generateDeathRecords(
    "Mark",
    "Sullivan",
    dateWithTime(new Date("July 22, 1981")),
    dateWithTime(new Date("January 30, 2005")),
    "Gunshot Wound"
  );

  // Reporter who got killed
  UniverseMap["Michael Thompson"] = {
    firstName: "Michael",
    lastName: "Thompson",
    fullName: "Michael Thompson",
    birthDate: new Date("May 14, 1981"),
    profession: "Journalist",
    address: "Apartment 7C, Willow Lane, Redmarsh, Midwest",
    deathDate: new Date("February 05, 2005")
  };

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
    dateWithTime(new Date("February 05, 2005")),
    "Accident"
  );

  let interviewTime = new Date("February 4, 2005 11:00:00")
  checkInRecords.push({
    "date": interviewTime,
    "time": timeStamp(interviewTime),
    "name": "Michael Thompson",
    "comment": "Intervieing Angelina Grimes",
    "signature": "M T",
    "place": "Generico"
  })



  UniverseMap["Samuel Hayes"] = {
    firstName: "Samuel",
    lastName: "Hayes",
    fullName: "Samuel Hayes",
    birthDate: new Date("March 15, 1978"),
    profession: "Ward",
    workplace: "Redmarsh Healthcare",
    address: "Suite 12B, Willow Lane Residences, Redmarsh City"
  };
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
  checkInRecords.push({    
    "date": new Date("August 11, 2004"),
    "time": "10:30 AM",
    "name": "Samuel Hayes",
    "comment": "Late due to some work at staff quarter",
    "signature": "S H",
    "place": "Redmarsh Healthcare"
  })


  // CEO of redmarsh chemicals
  UniverseMap["Molly Sanford"] = {
    firstName: "Molly",
    lastName: "Sanford",
    fullName: "Molly Sanford",
    birthDate: new Date("July 12, 1965"),
    profession: "Chief Executive Officer",
    workplace: "Redmarsh Chemicals",
    address: "Suite 140, Willow Lane Residences, Redmarsh City",
    deathDate: new Date("June 5, 2005"),
  };

  generateBirthRecords("Molly", "Sanford", dateWithTime(new Date("July 12, 1965")), "Male")
  generateEmploymentRecord("Molly", "Sanford", dateWithTime(new Date("July 12, 1965")), "Suite 140, Willow Lane Residences, Redmarsh City", "Chief Executive Officer", "Redmarsh Chemicals" )
  generateDeathRecords("Molly", "Sanford", dateWithTime(new Date("July 12, 1965")), new Date("June 5, 2005"), "Murder")

  doctors.push("Cletus Blick");
  doctors.push("Hubert Lowe");
  doctors.push("Hubert Lowe");

  // data for people who were trafficked
  createFamily("Dale", "Grady", "Male", 30, true, new Date("September 12, 2004"))
  createFamily("May", "Bayer", "Female", 42, true, new Date("October 18, 2004"))
  createFamily("Beverly", "Jakubowski", "Female", 20, false, new Date("November 10, 2004"))
  createFamily("Clint", "Barrows", "Male", 50, false, new Date("December 15, 2004"))

  // Detective background
  generateBirthRecords("David", "Hill", new Date("February 6, 1955"), "Male")
  generateBirthRecords("Robyn", "Hill", new Date("May 6, 1955"), "Female")
  generateDeathRecords("Robyn", "Hill", new Date("May 6, 1955"), new Date("February 20, 2000"), "Accident")

  UniverseMap["Roxanne Hill"] = {
    firstName: "Roxanne",
    lastName: "Hill",
    fullName: "Roxanne Hill",
    birthDate: new Date("November 10, 1979"),
    profession: "Computer Engineer",
    workplace: "Genrico",
    address: "47462 Nicola Divide Apt. 606, Redmarsh, Nocturna, Zorik",
    deathDate: new Date("January 20, 2005"),
  };

  generateBirthRecords("Roxanne", "Hill", new Date("November 10, 1979"), "Female", "David Hill", "Robyn Hill")
  generateEmploymentRecord("Roxanne", "Hill", new Date("November 10, 1979"), "47462 Nicola Divide Apt. 606, Redmarsh, Nocturna, Zorik", "Computer Engineer", "Genrico")
  let admissionDate = generateDeathRecords("Roxanne", "Hill", new Date("November 10, 1979"), new Date("January 20, 2005"), "Accident", "Hubert Lowe", "Cletus Blick")


  // Antagonist
  UniverseMap["Roger Hintz"] = {
    firstName: "Roger",
    lastName: "Hintz",
    fullName: "Roger Hintz",
    birthDate: new Date("November 10, 1979"),
    profession: "Computer Engineer",
    workplace: "Genrico",
    address: "47462 Nicola Divide Apt. 709, Redmarsh, Nocturna, Zorik"
  };
  generateBirthRecords("Roger", "Hintz", new Date("November 10, 1979"), "Male")
  generateEmploymentRecord("Roger", "Hintz", new Date("November 10, 1979"), "47462 Nicola Divide Apt. 709, Redmarsh, Nocturna, Zorik", "Computer Engineer", "Genrico")
  let visitTime = new Date(admissionDate.getTime() + 30 * 60 * 1000);
  checkInRecords.push({
    "date": visitTime,
    "time": timeStamp(visitTime),
    "name": "Roger Hintz",
    "comment": "Meeting paitent Roxanne Hill",
    "signature": "R H",
    "place": "Redmarsh Healthcare"
  })

  // 3 people working in redmarsh chemicals and trafficing organ  
  createFamily("Alonzo", "McEnzie", "Male", 35, true, false, "Businessman", "Redmarsh Chemicals")
  let Ivan = createFamily("Ivan", "Lofer", "Male", 47, true, false, "Accountant", "Redmarsh Chemicals")
  createFamily("Van", "Swift", "Male", 27, true, false, "Businessman", "Redmarsh Chemicals")
  generateDeathRecords("Ivan", "Lofer", Ivan.person.birthDate, dateWithTime(new Date("January 30, 2005")), "Gunshot Wound")
  UniverseMap["Ivan Lofer"]["deathDate"] = new Date("January 30, 2005")

  // Ringmaster of all this 
  createFamily("Angelina", "Grimes", "Female", 39, true, false, "Businessman", "Redmarsh Chemicals")

  let marcus = createFamily("Marcus", "Thorne", "Male",35, true, false)
  generateDeathRecords("Marcus", "Thorne", marcus.person.birthDate, new Date("August 2, 2004"), "Poisoning", "Juan Martinez")
  UniverseMap["Marcus Thorne"]["deathDate"] = new Date("August 2, 2004")


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


// Util functions 

function timeStamp(date){
  let temp = new Date(date.getTime() - 5.5 * 60 * 60 * 1000)
  let AMPM = "AM"
  if(temp.getHours() > 12) AMPM = "PM"
  return `${temp.getHours()}:${temp.getMinutes()} ${AMPM}`
}

UniverseList = Object.keys(UniverseMap)
// check in last 6 months
// each day you join in the workplace random days
// you have some one from postal service dropping something off

console.log("Created universe added people and there details")

const dates = [];
const today = new Date("07/17/2005");
const sixMonthsAgo = new Date("07/17/2004");

for (let d = sixMonthsAgo; d <= today; d.setDate(d.getDate() + 1)) {
  dates.push(new Date(d)); 
}


for(let z=0;z<UniverseList.length;z++){
  let i = UniverseList[z];
  let signature = UniverseMap[i].fullName.split(" ").map(val=>val[0]).join(" ")
  for(let d in dates){
    let date = dates[d]
    let _date = new Date(date.getTime() + 52200000 + faker.number.int({min: -10, max: 10}) * 60 * 1000)
    if(UniverseMap[i].deathDate && _date >= UniverseMap[i].deathDate) break;
    if(date.toLocaleDateString() == "11/10/2004" && i=="Samuel Hayes") continue
    let data = {
      "date": _date,
      "time": timeStamp(_date),
      "name": UniverseMap[i].fullName,
      "purpose": "Work",
      "comment": "No comments",
      "signature": signature,
      "place": UniverseMap[i].workplace
    }
    checkInRecords.push(data)
  }
}

for(let d in dates){
  let visitors = faker.number.int({min: 5, max: 20})
  for(let i=0;i<visitors;i++){
      let date = dates[d]
      date = new Date(date.getTime() + 52200000 + faker.number.int({min: 1, max: 5}) * faker.number.int({min:1, max:60}) * 60 * 1000)
      let name = faker.person.fullName()
      let signature = name.split(" ").map(val=>val[0]).join(" ")
      let data = {
        "date": date,
        "time": timeStamp(date),
        "name": name,
        "purpose": "Clinc visit",
        "comment": `Visit for ${faker.helpers.arrayElement(doctors)}`,
        "signature": signature,
        "place": "Redmarsh Healthcare"
      }
      checkInRecords.push(data)
    }
}

console.log("Added basic checkins for work and postal services")

for(let d in dates){
  let posts = faker.number.int({min: 5, max: 10})
  for(let i=0;i<posts;i++){
      let date = dates[d]
      date = new Date(date.getTime() + 52200000 + faker.number.int({min: 1, max: 5}) * faker.number.int({min:1, max:60}) * 60 * 1000)
      let name = faker.helpers.arrayElement(postal)
      let signature = name.split(" ").map(val=>val[0]).join(" ")
      let receiver = UniverseMap[faker.helpers.arrayElement(UniverseList)]
      while(!receiver["workplace"] && receiver.deathDate < new Date("07/17/2005"))
        receiver = UniverseMap[faker.helpers.arrayElement(UniverseList)]
      let data = {
        "date": date,
        "time": timeStamp(date),
        "name": name,
        "purpose": "postal",
        "comment": `Post for ${receiver.fullName} from ${faker.helpers.arrayElement(["StableKart", "Zmazon", "MissedIt", "No one cooks"])}`,
        "signature": signature,
        "place": receiver.workplace
      }
      checkInRecords.push(data)
    }
}

const importantDates = [new Date("September 12, 2004"), new Date("October 18, 2004"), new Date("November 10, 2004"), new Date("December 15, 2004"), new Date("January 20, 2005"), new Date("January 30, 2005")].map(val=>val.toISOString())
for(let d of dates){
  let portWork = faker.number.int({min:0, max:100}) > 75?true:false;
  
  if(importantDates.includes(d.toISOString())){
    console.log(d.getDate())
    let date = new Date(d.getTime() + 52200000 + Math.random() * 5 * 60 * 60 * 1000);
    if(d.getDate() == 30) date = new Date(d.getTime() + 52200000 + Math.random() * 15 * 60 * 1000);
    let names = ["Alonzo McEnzie","Ivan Lofer","Van Swift"]
    let signatures = ["A M", "I L", "V S"]
    let datas =  names.map((val, idx)=>{
      let entryDate = new Date(date.getTime() + Math.random() * 20 * 60 * 1000)
      return{
        "date": entryDate,
        "time": timeStamp(entryDate),
        "name": val,
        "purpose": "Send Goods",
        "comment": "Chemicals to be send on urgency basis",
        "signature": signatures[idx],
        "place": "Redmarsh Postal Services"
      }
    })
    // Day of encounter
    if(d.getDate() == 30){
      datas[0]["comment"] = "+ 1 person for urgent delivery";
      datas[0]["date"] = new Date(d.getTime() + 52200000 + 10 * 60 * 1000)
      datas[0]["time"] = "9:10 AM"
      let inspectorEntryTime = new Date(d.getTime() + 52200000 - 30 * 60 * 1000)
      datas.push({
        "date": inspectorEntryTime,
        "time": timeStamp(inspectorEntryTime),
        "name": "Mark Sullivan",
        "comment": "Inspection for few shipments",
        "signature": "M S",
        "place": "Redmarsh Postal Services"
      })
    } 

    checkInRecords.push(...datas)
    portWork=false
  }

  if(portWork){
    let date = new Date(d.getTime() + 52200000 + Math.random() * 5 * 60 * 60 * 1000);
    let SR = Math.random() * 100 < 50 ? "Send Goods": "Receive Goods"
    let names = faker.helpers.arrayElements(RedmarshChemicals, {min:1, max:3})
    let deadNames = names.filter(val=>UniverseMap[val].deathDate &&UniverseMap[val].deathDate<d) 
    while( deadNames.length != 0){
      names = faker.helpers.arrayElements(RedmarshChemicals, {min:1, max:3})
      deadNames = names.filter(val=>UniverseMap[val].deathDate && UniverseMap[val].deathDate<d) 
    }
    let signatures = names.map(name=>name.split(" ").map(val=>val[0]).join(" "))
    let datas = names.map((val, idx)=>{
      let entryDate = new Date(date.getTime() + Math.random() * 20 * 60 * 1000)
      return{
        "date": entryDate,
        "time": timeStamp(entryDate),
        "name": val,
        "purpose": SR,
        "comment": "", // TODO: create better comment for delivery and posts
        "signature": signatures[idx],
        "place": "Redmarsh Postal Services"
      }
    })
    checkInRecords.push(...datas)
  }

  let randomPortWork = faker.number.int({min:1, max: 3})
  for(let i=0;i<randomPortWork;i++){
    let date = new Date(d.getTime() + 52200000 + Math.random() * 5 * 60 * 60 * 1000);
    let SR = Math.random() * 100 < 50 ? "Send Goods": "Receive Goods"
    let name = faker.person.fullName();
    let signature = name.split(" ").map(val=>val[0]).join(" ")
    checkInRecords.push({
      "date": date,
      "time": timeStamp(date),
      "name": name,
      "purpose": SR,
      "comment": "",
      "signature": signature,
      "place": "Redmarsh Postal Services"
    }) 
  }

}

for(let d of importantDates){
  if(d.includes("2005-01-30")) continue
  let postTime = new Date(new Date(d).getTime() + (Math.random() * 5 + 9) * 60 * 60 * 1000)
  let postman = faker.helpers.arrayElement(postal);
  checkInRecords.push({
    "date": postTime,
    "time": timeStamp(postTime),
    "name": postman,
    "comment": "Chemical sample for Angelina Grimes",
    "signature": postman.split(" ").map(val=>val[0]).join(" "),
    "place": "Genrico"
  })
}

checkInRecords.sort((a, b)=> b.date - a.date)

fs.writeFileSync(
  "src/assets/checkin_records.json",
  JSON.stringify(checkInRecords, null, 2),
  "utf-8"
);
