import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons for LinkedIn, GitHub, etc.

const Footer = () => {
  return (
    <footer className="footer">
    
      <div className="footer-icons">
        <Link href="https://www.linkedin.com/in/benediktas-rocys/" target="_blank">
          <FaLinkedin className="footer-icon" />
        </Link>
        <Link href="https://github.com/itsbeans" target="_blank">
          <FaGithub className="footer-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
