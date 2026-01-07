const Footer = () => {
  return (
    <footer id="contact">
      <p>Let's work together?</p>
      
      <div style={{ margin: '20px 0' }}>
        <a 
          href="https://github.com/JanseyScofield" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="ph ph-github-logo"></i>
        </a>
        
        <a 
          href="https://linkedin.com/in/janseyscofield" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="ph ph-linkedin-logo"></i>
        </a>
        
        <a 
          href="mailto:janscofield10@gmail.com"
          aria-label="Email"
        >
          <i className="ph ph-envelope"></i>
        </a>
      </div>

      <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Jansey Scofield
      </p>
    </footer>
  );
};

export default Footer;