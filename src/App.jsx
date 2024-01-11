import "./App.css";
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import Model from "./components/Model";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<Model />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
