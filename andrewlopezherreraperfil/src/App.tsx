import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import UniversityProjects from "./universityProjects/UniversityProjects";
import Course from "./universityProjects/Course";
import Comment from "./comments/Comment";
import { Helmet } from "react-helmet";
import PersonalProjects from "./personalProjects/PersonalProjects";

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
              "name": "Instituto Tecnológico de Costa Rica",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Limón",
                "addressCountry": "Costa Rica"
              }
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
          <Route path="/personalProjects" element={<PersonalProjects />} />
          <Route path="/personal-project/:name" element={<PersonalProject />} />
          <Route path="/comments" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;