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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
