import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Natnael T. Workneh</h3>
        <p>
          "Thank you! for taking the time to visit my portfolio website and learn
          more about me. <br /> If you're interested in working together, please
          don't hesitate to contact me."
        </p>
        <div className="social-links mb-3">
          <a
            href="https://www.linkedin.com/in/natnaeltibebu/"
            target="_blank"
            className="linkedin"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a href="mailto:natnaelti94@gmail.com" className="email">
            <i className="bx bxl-gmail" />
          </a>
          <a
            href="https://www.instagram.com/natibebu/"
            target="_blank"
            className="instagram"
          >
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://t.me/Natibebu" target="_blank" className="telegram">
            <i className="bx bxl-telegram" />
          </a>
          <a href="https://wa.me/251908781851" target="_blank" className="whatsapp">
            <i className="bx bxl-whatsapp" />
          </a>
        </div>
        <div className="Username">
          <strong>@Nati-Ti</strong>
        </div>
      </div>
    </footer>

  )
}

export default Footer