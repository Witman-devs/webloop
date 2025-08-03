import { Box, Link, Modal, Stack, Typography } from "@mui/material";
import OrganRequestMessage from "./OrganRequestMessage";
import { useState } from "react";
import MonochromeButton from "./MonochromeButton";

const organRequests = [
  {
    requester: "Mr. John Anderson",
    organization: "Blackridge Medical Syndicate",
    contact: "+34-XXXX-5566",
    organ: "Bone Marrow",
    bloodType: "O+",
    urgency: "Urgent",
    specialNote: "Procedure scheduled in 48 hours. Courier must be trusted.",
    requestId: "REQ-7612-BRM",
    date: "30th April 2023",
    failed: true,
  },
  {
    requester: "Mr. John Anderson",
    organization: "Saint Eclipse Clinic",
    contact: "+44-XXXX-XXXX",
    organ: "Heart",
    bloodType: "AB-",
    urgency: "Emergency",
    specialNote: "Donor must be under 30. Discreet transport required.",
    requestId: "REQ-1432-BLK",
    date: "19th December 2022",
    doneDate: "20 12 2022",
  },
  {
    requester: "Mr. John Anderson",
    organization: "Orion Biomedical Center",
    contact: "+39-XXXX-YYYY",
    organ: "Kidney",
    bloodType: "B+",
    urgency: "High",
    specialNote: "Ensure preservation box is pre-cooled. Recipient ready.",
    requestId: "REQ-4217-MDL",
    date: "21th November 2022",
    doneDate: "22 11 2022",
  },
  {
    requester: "Mr. John Anderson",
    organization: "Silent Veil Facility",
    contact: "+82-XXXX-1234",
    organ: "Liver",
    bloodType: "O-",
    urgency: "Routine",
    specialNote: "Anonymity crucial. No paper trail.",
    requestId: "REQ-3094-NXG",
    date: "18th November 2022",
    doneDate: "18 11 2022",
  },
  {
    requester: "Mr. John Anderson",
    organization: "Red Hollow Labs",
    contact: "+359-XXXX-9988",
    organ: "Lungs",
    bloodType: "A+",
    urgency: "Critical",
    specialNote: "Target already sent. Use secure transport team Alpha.",
    requestId: "REQ-8841-CTR",
    date: "24th October 2022",
    doneDate: "25 10 2022",
  },
  {
    requester: "Mr. John Anderson",
    organization: "Grey Bridge Outpost",
    contact: "+1-202-XXXX",
    organ: "Pancreas",
    bloodType: "AB+",
    urgency: "Moderate",
    specialNote: "Transport vehicle must have refrigeration. Avoid customs.",
    requestId: "REQ-1110-SHD",
    date: "12th October 2022",
    doneDate: "13 10 2022",
  },
];

const flowKey = "EvidenceBoard";

function addToEvidenceBoard() {
  let flow = JSON.parse(localStorage.getItem(flowKey));
  if (!flow) flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
  const organRequestNodes = organRequests.map((request) => ({
    id: request.requestId,
    position: {
      x: 0,
      y: 0,
    },
    origin: [0.5, 0.0],
    type: "organ_request",
    data: request,
  }));
  flow.nodes.push(...organRequestNodes);
  localStorage.setItem(flowKey, JSON.stringify(flow));
}

export default function ViewOrganRequestMessage() {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    backgroundColor: "#fff",
    boxShadow: 24,
    padding: "36px",
    overflowY: "scroll",
    maxHeight: "80vh",
  };
  return (
    <>
      <Link component="span" onClick={() => setOpen(true)}>
        View Organ Requests
      </Link>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            Organ Requests
          </Typography>
          <Stack marginBlockEnd={5} spacing={2}>
            {organRequests.map((request, index) => (
              <OrganRequestMessage key={index} {...request} />
            ))}
          </Stack>
          <MonochromeButton onClick={() => addToEvidenceBoard()}>
            Add to evidence board
          </MonochromeButton>
        </Box>
      </Modal>
    </>
  );
}
