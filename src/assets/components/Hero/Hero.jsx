import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js'; 
import './Hero.css';
import logo from '../../img/Logo.png';
import smallLogo from '../../img/logo2.png';

function Hero() {
  const typedRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const typedElement = typedRef.current;
    if (!typedElement) return;

    let typedInstance = new Typed(typedElement, {
      strings: typedElement.getAttribute('data-typed-items').split(','),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000
    });

    return () => {
      typedInstance.destroy();
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return (
    <>
      {window.innerWidth < 768 ? (
        <img className='logo_img2' src={smallLogo} alt="Small Logo" />
      ) : (
        <div className={isScrolled ? 'fixed_bar' : ''}>
          <img className='logo_img' src={logo} alt="Logo" />
        </div>
      )}

    <section id="hero" className="d-flex flex-column justify-content-center">
      
      <div className="container" data-aos="zoom-in" data-aos-delay={100}>

        <h1>Natnael T. Workneh</h1>
        <p>
          I'm{' '}
          <span
            ref={typedRef}
            className="typed"
            data-typed-items="Computer Engineer, Full Stack Developer, Freelancer"
          />
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/natnaeltibebu/" target="_blank" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="mailto:natnaelti94@gmail.com" className="email">
            <i className="bx bxl-gmail" />
          </a>
          <a href="https://www.instagram.com/natibebu/" target="_blank" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://t.me/Natibebu" target="_blank" className="telegram">
            <i className="bx bxl-telegram" />
          </a>
          <a href="https://wa.me/251908781851" target="_blank" className="whatsapp">
            <i className="bx bxl-whatsapp" />
          </a>
          <a href="https://github.com/Nati-Ti" target="_blank" className="github">
            <i className="bx bxl-github" />
          </a>
        </div>
      </div>
    </section>
    </>
    
  );
}

export default Hero;
