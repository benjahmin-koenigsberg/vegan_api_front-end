import "./App.css";
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import AboutPage from "./pages/AboutPage";
import SandboxPage from "./pages/SandboxPage";
import DonatePage from "./pages/DonatePage";
import FourZeroFour from "./pages/FourZeroFour";
import BensUploadPage from "./pages/BensUploadPage";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sandbox" element={<SandboxPage />} />
          <Route path="/bensupload" element={<BensUploadPage />} />
          <Route path="*"  element={<FourZeroFour />}  />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
