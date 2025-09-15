import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
  DialogActions,
  Button,
  Fab,
  Snackbar,
} from "@mui/material";
import {
  Mail,
  X,
  Clock,
  MailIcon,
  Search,
  Reply,
  Forward,
  Pencil,
  Video,
  Play,
} from "lucide-react";
import "../index.css";
import emailsData from "../assets/emails.json";
import VideoPlayer from "../components/VideoPlayer";
import intro from "../assets/intro.mp4";
import { useNavigate } from "react-router";
import { useSound } from "../hook/SoundContext";
import { MUSIC_TITLE } from "../consts";

const emailsToBeReceived = {
  news: {
    id: "news",
    subject:
      "Breaking News: An open challenge to Detective Hill from serial killer",
    sender: "Atlas News Agency <no-reply@atlasnews.com",
    content: NewsMail,
    date: "2025-09-15T00:00:00Z",
  },
  killer: {
    id: "killer",
    subject: "DETECTIVE HILL Catch me if you can",
    sender: "ouroboros.the.killer@zemail.com",
    content: KillerChallenge,
    date: "2025-09-15T01:00:00Z"

  }
};

function KillerChallenge(){
  const navigate = useNavigate();
  const { playMainMusic, playSFXMusic } = useSound();


  const handleStart = ()=>{
    playSFXMusic(MUSIC_TITLE.StartGame);
    localStorage.setItem("emailChecked", "true");
    navigate("/game")
  }

  return (
    <>
    <br/>

    <Typography variant="h4">Detective Hill, Catch me if you can</Typography>
    <br/>

    <Typography variant="body">
      I dare you to open the application I sent you and play with me.
      If you humor me good I will give you my info.
      If you fail to do so...
    </Typography>
      <Typography variant="h5">I have few people on my hitlist. They will be my next target.</Typography>
    <br/>
    <br/>
      <Typography>
        Death & Despair, <br/>
        Ouroboros The Killer
      </Typography>
    <Button variant="span" onClick={handleStart}>
        <Play style={{ marginRight: "5px" }}  />Launch attached application</Button>
    </>
  )
}

function NewsMail({ showVideo, setShowVideo }) {
  return (
    <>
      Respected Detective Hill,
      <br />
      Nation is looking at you please spring back into action help us save
      lifes.
      <br />
      Please see the attached video.
      <br />
      <br />
      Thanks & regards,
      <br />
      Atlas News Agency <br />
      <br />
      <Button
        variant="span"
        onClick={() => {
          setShowVideo(true);
        }}
      >
        <Video style={{ marginRight: "5px" }} /> Click to play attached video
      </Button>
    </>
  );
}

function AttachedVideo({ showVideo, setShowVideo }) {
  return (
    <>
      {showVideo ? (
        <VideoPlayer
          videoSrc={intro}
          onVideoEnd={() => setShowVideo(false)}
          onSkip={() => setShowVideo(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default function Inbox() {
  const { playMainMusic, playSFXMusic } = useSound();
  const [emails, setEmails] = useState(emailsData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [newEmail, setNewEmail] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPlayedOnce, setVideoPlayedOnce] = useState(false);

  // Form states for compose
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("4");

  // Filter + sort logic
  const filteredEmails = useMemo(() => {
    let filtered = emails.filter(
      (email) =>
        email.subject.toLowerCase().includes(search.toLowerCase()) ||
        email.sender.toLowerCase().includes(search.toLowerCase()) ||
        email.content.toLowerCase().includes(search.toLowerCase())
    );

    filtered.sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

    return filtered;
  }, [emails, search, sortOrder]);

  useEffect(() => {
    setTimeout(() => {
      setEmails((prev) => [...prev, emailsToBeReceived.news]);
      setNewEmail("news");
    }, 1200);
  }, []);

  useEffect(()=>{
    if(videoPlayedOnce || !showVideo) return;
    setVideoPlayedOnce(true);
    setTimeout(()=>{setEmails(prev=>[...prev, emailsToBeReceived.killer]); setNewEmail("killer")}, 10000)

  }, [showVideo])

  const handleSend = () => {
    if (to == "witman.devs@gmail.com") {
      setTimeout(() => {
        setEmails((prev) => {
          const id = new Date().toString();
          setNewEmail(id);
          return [
            ...prev,
            {
              id: id,
              subject: subject,
              sender: "witman.devs@gmail.com",
              content: `Hello player,\n\nThanks for playing our game. I Think you should watch news report and start.\n\nPS- It is cool that you emailed me:)\n\nThanks & Regards,\nWits.\n---\n\n\nOn ${new Date().toISOString()} Player send: \n\n ${content}`,
              date: new Date().toISOString(),
            },
          ];
        });
      }, 200);
    } else if (to === "prince@lagosfortune.org") {
      // todo: put a meme in reply saying you so stupid. you are a failure
      console.log("HEHE");
    }
    setComposeOpen(false);
    setOpen(true);
    setTo(null);
    setSubject(null);
    setContent(null);
  };

  useEffect(()=>{
    playSFXMusic(MUSIC_TITLE.MinorLink);
  }, [newEmail])

  return (
    <Box
      sx={{
        Width: "100vw",
        mx: "auto",
        p: 3,
        marginBlockStart: 3,
        height: "90vh",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Typography variant="h2"> EM@IL </Typography>
        <TextField
          fullWidth
          slotProps={{
            input: {
              endAdornment: <Search onClick={() => setSearch(search)} />,
            },
          }}
          variant="outlined"
          label="Search emails"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl sx={{ minWidth: "10vw" }}>
          <InputLabel>Sort</InputLabel>
          <Select
            value={sortOrder}
            label="Sort"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="desc">Newest First</MenuItem>
            <MenuItem value="asc">Oldest First</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Email List */}
      <List>
        {filteredEmails.map((email) => (
          <ListItem
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            sx={{ borderBottom: "1px solid #eee" }}
            className={newEmail === email.id ? "blink" : ""}
          >
            <ListItemAvatar>
              <Avatar>
                <Mail size={18} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {email.subject}
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {email.sender}
                  </Typography>
                  {" — "}
                  {typeof email.content == String
                    ? email.content.slice(0, 40)
                    : "Unable to load open mail to check content"}
                  ...
                </>
              }
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                fontSize: 12,
              }}
            >
              <Clock size={14} style={{ marginRight: 4 }} />
              {new Date(email.date).toLocaleDateString()}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* See Mail */}
      <Dialog
        open={Boolean(selectedEmail)}
        onClose={() => setSelectedEmail(null)}
        fullWidth
        width="100vw"
        TransitionProps={{ timeout: 300 }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          {selectedEmail?.subject}
          <IconButton onClick={() => setSelectedEmail(null)}>
            <X />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2" color="text.secondary">
            From: {selectedEmail?.sender}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Date: {new Date(selectedEmail?.date).toLocaleString()}
          </Typography>
          <DialogContentText
            sx={{ whiteSpace: "pre-line", marginX: 2, marginBlockEnd: 5 }}
          >
            {typeof selectedEmail?.content == "function" ? (
              <selectedEmail.content
                showVideo={showVideo}
                setShowVideo={setShowVideo}
              />
            ) : (
              selectedEmail?.content
            )}
          </DialogContentText>
          <Divider />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: "15px",
                cursor: "pointer",
                backgroundColor: "#ccc",
                borderRadius: "25px",
              }}
              onClick={() => {
                setComposeOpen(true);
                setContent(
                  `\n\n---\nOn ${new Date(
                    selectedEmail?.date
                  ).toLocaleString()}, ${selectedEmail?.sender} wrote:\n${
                    selectedEmail?.content
                  }`
                );
                setSubject(`Re: ${selectedEmail?.subject}`);
                setTo(selectedEmail?.sender);
                setSelectedEmail(null);
              }}
            >
              <Reply /> Reply
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: "15px",
                cursor: "pointer",
                backgroundColor: "#ccc",
                borderRadius: "25px",
              }}
              onClick={() => {
                setComposeOpen(true);
                setContent(
                  `\n\n---\nOn ${new Date(
                    selectedEmail?.date
                  ).toLocaleString()}, ${selectedEmail?.sender} wrote:\n${
                    selectedEmail?.content
                  }`
                );
                setSubject(`Fw: ${selectedEmail?.subject}`);
                setTo(null);
                setSelectedEmail(null);
              }}
            >
              <Forward /> Forward
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Compose Email  */}
      <Dialog
        open={composeOpen}
        onClose={() => setComposeOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          Compose New Email
          <IconButton onClick={() => setComposeOpen(false)}>
            <X />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            margin="dense"
            label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Message"
            multiline
            minRows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setComposeOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        color="primary"
        aria-label="compose"
        className="compose-fab"
        onClick={() => setComposeOpen(true)}
        sx={{ position: "fixed", bottom: "24px", right: "24px" }}
      >
        <Pencil size={20} />
      </Fab>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Mail Sent"
      />

      <AttachedVideo showVideo={showVideo} setShowVideo={setShowVideo} />
    </Box>
  );
}
