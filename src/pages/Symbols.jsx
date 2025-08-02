import { Link, Stack, Typography } from "@mui/material";
import AntagonistLogo from "../components/AntagonistLogo";

function SymbolInfo({ image, children }) {
  return (
    <Stack padding={2} direction="row">
      <Stack>{children}</Stack>
      {image}
    </Stack>
  );
}

export default function Symbols({ setPageName }) {
  return (
    <Stack style={{ width: "50%", paddingLeft: "25%" }} padding={5}>
      <Typography variant="h2">Symbol</Typography>
      <SymbolInfo image={<AntagonistLogo setPageName={setPageName} />}>
        <Typography variant="h3">Ouroboros</Typography>
        The Ouroboros is an ancient symbol depicting a snake or dragon eating
        its own tail. It represents cyclicality, eternity, and the idea of
        renewal and self-regeneration, often symbolizing concepts like infinity,
        the cycle of life and death, and the unity of all things. Also a symbol
        recently used by a{" "}
        <Link
          component="span"
          sx={{ display: "inline" }}
          onClick={() => setPageName("home")}
        >
          serial killer.
        </Link>
      </SymbolInfo>

      {/* TODO: Add symbols for strength (comp), protection(police), peace(doctor) */}
    </Stack>
  );
}
