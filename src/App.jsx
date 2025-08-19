import Hero1 from "./Module/Hero1";
import Background from './Background/Background'
import { Routes, Route } from "react-router-dom";
import Hero2 from "./Module/Hero2/Hero2";

import Contacts from "./Routes/Contacts/Contacts";
import About_me from "./Routes/About/About_me";
import Education from "./Routes/Education/Education";
import Exp from "./Routes/Exp/Exp";
import Skills from "./Routes/Skills/Skills";
import Projects from "./Routes/Projects/Projects";
import Fallback_404 from "./Routes/Error/Fallback_404";



export default function App() {
  return (
    <div>
      <Background />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero1 />
              <Hero2 />
            </>
          }
        />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Contacts */}
        <Route path="/contacts" element={<Contacts />} />

        {/* About Me */}
        <Route path="/about_me" element={<About_me />} />

        {/* Education */}
        <Route path="/education" element={<Education />} />

        {/* Experience */}
        <Route path="/exp" element={<Exp />} />

        {/* Skills */}
        <Route path="/skills" element={<Skills />} />

        {/* Fallback 404 */}
        <Route path="*" element={<Fallback_404 />} />

        
      </Routes>
    </div>
  );
}
