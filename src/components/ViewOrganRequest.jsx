import { Box, Link, Modal, Stack, Typography } from "@mui/material";
import OrganRequestMessage from "./OrganRequestMessage";
import { useEffect, useState } from "react";
import MonochromeButton from "./MonochromeButton";

const organRequests = [
  {
    requester: "Mr. James Anderson",
    organization: "Blackridge Medical Syndicate",
    contact: "+34-XXXX-5566",
    organ: "Bone Marrow",
    bloodType: "O+",
    urgency: "Urgent",
    specialNote: "Procedure scheduled in 48 hours. Courier must be trusted.",
    requestId: "REQ-7612-BRM",
    date: "10th August 2004",
    failed: true,
  },
  {
    requester: "Mr. James Anderson",
    organization: "Grey Bridge Outpost",
    contact: "+1-202-XXXX",
    organ: "Pancreas",
    bloodType: "AB+",
    urgency: "Moderate",
    specialNote: "Transport vehicle must have refrigeration. Avoid customs.",
    requestId: "REQ-1110-SHD",
    date: "11th September 2004",
    doneDate: "12 09 2004",
  },
  {
    requester: "Mr. James Anderson",
    organization: "Saint Eclipse Clinic",
    contact: "+44-XXXX-XXXX",
    organ: "Heart",
    bloodType: "AB-",
    urgency: "Emergency",
    specialNote: "Donor must be under 30. Discreet transport required.",
    requestId: "REQ-1432-BLK",
    date: "17th October 2004",
    doneDate: "18 10 2004",
  },
  {
    requester: "Mr. James Anderson",
    organization: "Orion Biomedical Center",
    contact: "+39-XXXX-YYYY",
    organ: "Kidney",
    bloodType: "B+",
    urgency: "High",
    specialNote: "Ensure preservation box is pre-cooled. Recipient ready.",
    requestId: "REQ-4217-MDL",
    date: "9th Novermber 2004",
    doneDate: "10 11 2004",
  },
  {
    requester: "Mr. James Anderson",
    organization: "Silent Veil Facility",
    contact: "+82-XXXX-1234",
    organ: "Liver",
    bloodType: "O-",
    urgency: "Routine",
    specialNote: "Anonymity crucial. No paper trail.",
    requestId: "REQ-3094-NXG",
    date: "13th December 2004",
    doneDate: "15 12 2004",
  },
  {
    requester: "Mr. James Anderson",
    organization: "Red Hollow Labs",
    contact: "+359-XXXX-9988",
    organ: "Lungs",
    bloodType: "A+",
    urgency: "Critical",
    specialNote: "Target already sent. Use secure transport team Alpha.",
    requestId: "REQ-8841-CTR",
    date: "20th January 2005",
    doneDate: "20 01 2005",
  },
];

const organRequestIds = organRequests.map((val) => val.requestId);

const flowKey = "EvidenceBoard";

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

export default function ViewOrganRequestMessage() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let docs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    let exist = true;
    for (let i = 0; i < organRequestIds.length; i++) {
      if (!docs.includes(organRequestIds[i])) exist = false;
    }
    if (!exist) setMessage("");
    else setMessage("Document Already Added to evidence board");
  }, [open]);

  const addToEvidenceBoard = () => {
    let missingIds = [];
    let docs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    for (let i = 0; i < organRequestIds.length; i++) {
      if (!docs.includes(organRequestIds[i]))
        missingIds.push(organRequestIds[i]);
    }

    let flow = JSON.parse(localStorage.getItem(flowKey));
    if (!flow)
      flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
    const organRequestNodes = organRequests.map((request) => {
      if (missingIds.includes(request.requestId))
        return {
          id: request.requestId,
          position: {
            x: 0,
            y: 0,
          },
          origin: [0.5, 0.0],
          type: "organ_request",
          data: request,
        };
    }).filter(val=>val!=null);
    flow.nodes.push(...organRequestNodes);
    localStorage.setItem(flowKey, JSON.stringify(flow));

    localStorage.setItem(
      "addedDocuments",
      JSON.stringify([...docs, ...missingIds])
    );
    setMessage("Document Already Added to evidence board");
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
          {message ? (
            <Typography variant="h6" color="text.secondary">
              {message}
            </Typography>
          ) : (
            <MonochromeButton onClick={() => addToEvidenceBoard()}>
              Add to evidence board
            </MonochromeButton>
          )}
          <Stack marginBlockEnd={5} spacing={2}>
            {organRequests.map((request, index) => (
              <OrganRequestMessage key={index} {...request} />
            ))}
          </Stack>
          {message ? (
            <Typography variant="h6" color="text.secondary">
              {message}
            </Typography>
          ) : (
            <MonochromeButton onClick={() => addToEvidenceBoard()}>
              Add to evidence board
            </MonochromeButton>
          )}
        </Box>
      </Modal>
    </>
  );
}
