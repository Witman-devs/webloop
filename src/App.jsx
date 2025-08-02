import { useState } from "react";
import PageRouter from "./components/PageRouter";
import { Settings } from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");

  // Menus related states
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(true);
  return (
    <div style={{ padding: 10 }}>

      <div style={{ height: "100vh", zIndex: -1 }}>
        <Settings
          style={{ position: "sticky", top: "5px" }}
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        />
        <Floaty />
      </div>

      <div style={{height: "80vh", position:"absolute", zIndex:10, top:0, left:"5vw"}}>
        <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} setEvidanceBoardOpen={setEvidanceBoardOpen}/>
        <PageRouter pageName={pageName} setPageName={setPageName}/>
      </div>
        {evidanceBoardOpen&&<EvidenceBoard setEvidanceBoardOpen={setEvidanceBoardOpen}/>}
    </div>
  );
}

export default App;
