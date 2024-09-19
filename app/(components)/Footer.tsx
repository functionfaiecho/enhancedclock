"use client";

const Footer: React.FC = () => {
  return (
    <div className="footer-container text-center p-4 text-textColour">
      <p>&copy; {new Date().getFullYear()} Faizah. All rights reserved.</p>
      <div className="github-logo mt-2">
        <img 
          src="./assets/githublogo.png" 
          alt="GitHub Logo" 
          className="w-8 h-8 mx-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
