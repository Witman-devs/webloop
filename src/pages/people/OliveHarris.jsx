import { Link, Typography, Box, Button, Modal } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/inspector.png";
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

export default function Inspector({ setPageName }) {
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
          name: "Inspector Olive Harris",
          fullName: "Olive Harris",
          birthDate: "July 22, 1982",
          deathDate: null,
          occupation: "Police Inspector",
          affiliation: (
            <Link
              component="span"
              onClick={() => setPageName("police")}
            >
              Redmarsh Police Department
            </Link>
          ),
          firstAppearance: "Case File #102 - 2015",
          address:
            "Inspector's Quarters,\nPolice Colony,\nWillow Lane,\nRedmarsh",
          image: directorImg,
          bio: `Inspector Olive Harris is a decorated officer known for his integrity and sharp investigative skills.
He has solved several high-profile cases and is respected by both his peers and the community.
He is committed to upholding the law and often conducts outreach programs to build trust between the police and citizens.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
