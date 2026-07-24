import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { profile } from "../data/profile.js";

const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
];

function Sidebar() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img src={profile.photo} alt={profile.name} className="sidebar-photo" />
        <h1 className="sidebar-name">{profile.name}</h1>
        <p className="sidebar-tagline">{profile.tagline}</p>
        <p className="sidebar-location">
          <FaMapMarkerAlt aria-hidden="true" />
          {profile.location}
        </p>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-socials">
        <a href={`mailto:${profile.email}`} title="Email" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href={profile.links.scholar}
          target="_blank"
          rel="noreferrer"
          title="Google Scholar"
          aria-label="Google Scholar"
        >
          <FaGraduationCap />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
