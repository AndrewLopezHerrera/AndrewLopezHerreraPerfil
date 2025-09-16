import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import UniversityProjects from "./universityProjects/UniversityProjects";
import Course from "./universityProjects/Course";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/universityProjects" element={<UniversityProjects />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/personalProjects" element={<UniversityProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;