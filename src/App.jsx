import { useState } from "react";
import PageRouter from "./components/PageRouter";
import { Settings } from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";

function App() {
  const [pageName, setPageName] = useState("home");
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(true);
  return (
    <div style={{ padding: 10 }}>
      <div style={{ height: "100vh", zIndex: 10 }}>
        <Settings
          style={{ position: "sticky", top: "5px" }}
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        />
        <Floaty />
      </div>
      <div style={{height: "80vh", position:"absolute", zIndex:-1, top:"10vh", left:"10px"}}>
        <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} setEvidanceBoardOpen={setEvidanceBoardOpen}/>
        <PageRouter pageName={pageName}/>
        <button type='button' onClick={()=>setPageName(pageName=="home"?"ouroboros":"home")} > Next Page </button>
      </div>
        {evidanceBoardOpen&&<EvidenceBoard setEvidanceBoardOpen={setEvidanceBoardOpen}/>}
    </div>
  );
}

export default App;
