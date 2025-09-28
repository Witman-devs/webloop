import { Link, Typography, Box, Button, Modal } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/chemEng.png";
import React, { useState, useEffect } from "react";
import { MedalIcon } from "lucide-react";

// Modal styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function ChemEngg({ setPageName }) {
  // State to control the modal's open/close status
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPageName("home"); // Redirect to home page when modal is closed
  }

  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Sandy Harris",
          fullName: "Sandy Harris",
          birthDate: "June 12, 1985",
          deathDate: null,
          occupation: "Chemical Engineer",
          affiliation: (
            <Link
              component="span"
              onClick={() => {}}
            >
              Redmarsh Chemicals
            </Link>
          ),
          firstAppearance: "Redmarsh Chemicals Registry - 2010",
          address:
            "221 Oakridge Lane,\nWestbridge,\nRedmarsh",
          image: directorImg,
          bio: `Sandy Harris is a brilliant chemical engineer at Redmarsh Chemicals, known for his deep expertise in complex reactions and lab-specific compounds. 
          He is renowned for his expertise and precision, he’s trusted with some of the most delicate and powerful compounds.
          With a sharp intellect and an unmatched knowledge of controlled substances, Sandy has contributed to numerous advancements in medical and industrial chemistry`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
