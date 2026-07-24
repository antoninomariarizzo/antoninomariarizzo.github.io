import { profile } from "../data/profile.js";

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  );
}

export default Footer;
