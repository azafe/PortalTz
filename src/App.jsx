import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Valores from "./pages/Valores";
import Proposito from "./pages/Proposito";
import Organigrama from "./pages/Organigrama";
import ManualChofer from "./pages/ManualChofer";
import FlotaEquipos from "./pages/FlotaEquipos";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/proposito" element={<Proposito />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/manual-chofer" element={<ManualChofer />} />
          <Route path="/flota-equipos" element={<FlotaEquipos />} /> 
      </Routes>
    </Layout>
  );
}

export default App;