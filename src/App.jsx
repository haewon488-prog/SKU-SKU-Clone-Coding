import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import TeamPage from "./components/TeamPage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route
          path="/team"
          element={
            <div className="lk-page" id="top">
              <TeamPage />
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
