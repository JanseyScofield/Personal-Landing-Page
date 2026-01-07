import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Full Stack Engineer", ".NET Specialist", "React Developer", "Python Developer"];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      timer = setTimeout(type, typeSpeed);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="reveal">Hi, my name is</h3>
          <h1 className="reveal">Jansey Scofield</h1>
          
          <div className="typewriter-container reveal">
            I am a&nbsp;<span id="typewriter">{text}</span><span className="cursor"></span>
          </div>

          <p className="reveal">
            I build robust solutions focused on performance, scalability, and maintainability. 
            I turn ideas into real software.
          </p>
          <div className="reveal">
            <a href="mailto:janscofield10@gmail.com" className="btn">Get in Touch</a>
          </div>
        </div>
        <div className="hero-img reveal">
          <img src="pic.png" alt="Jansey Scofield" />
        </div>
      </div>
    </section>
  );
};

export default Hero;