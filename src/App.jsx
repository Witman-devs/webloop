import { useState } from "react";
import PageRouter from "./components/PageRouter";
import { Settings } from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");

  // Menus related states
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(false);
  return (
    <div style={{ padding: 10, backgroundColor:grey[300],  }}>

      <div style={{ height: "100vh", width:"fit-content"}}>
        <Settings
          style={{ position: "sticky", top: "5px", zIndex:15 }}
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        />
        <Floaty />
      </div>

      <div style={{height: "100vh", position:"absolute", zIndex:10, top:0, width:"calc(100vw - 16px)", overflow:"auto"}} >
        <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} setEvidanceBoardOpen={setEvidanceBoardOpen}/>
        <PageRouter pageName={pageName} setPageName={setPageName}/>
      </div>
        {evidanceBoardOpen&&<EvidenceBoard setEvidanceBoardOpen={setEvidanceBoardOpen}/>}
    </div>
  );
}

export default App;
