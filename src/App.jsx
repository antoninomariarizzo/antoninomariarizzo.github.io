import Sidebar from "./components/Sidebar.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Awards from "./components/Awards.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
