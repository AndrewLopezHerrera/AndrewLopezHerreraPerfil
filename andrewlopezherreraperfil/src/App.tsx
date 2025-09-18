import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import UniversityProjects from "./universityProjects/UniversityProjects";
import Course from "./universityProjects/Course";
import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Andrew López Herrera",
            "email": "andrewlopezherrera@proton.me",
            "jobTitle": "Computer Engineering Student",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Costa Rica Institute of Technology",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Limón",
                "addressCountry": "Costa Rica"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "150m east from Pandora Oeste School, Valle La Estrella",
              "addressLocality": "Limón",
              "addressCountry": "Costa Rica"
            },
            "telephone": "+506 6067 8713",
            "sameAs": [
              "https://www.linkedin.com/in/andrewlopezherrera",
              "https://github.com/AndrewLopezHerrera"
            ]
          })}
        </script>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/universityProjects" element={<UniversityProjects />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/personalProjects" element={<UniversityProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;