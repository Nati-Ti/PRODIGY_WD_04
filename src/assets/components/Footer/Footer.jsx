import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Natnael Tibebu</h3>
        <p>
          "Thank you! for taking the time to visit my portfolio website and learn
          more about me. <br /> If you're interested in working together, please
          don't hesitate to contact me."
        </p>
        <div className="social-links">
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
        <div className="copyright">
          © Copyright.{" "}
          <strong>
            <span />
          </strong>{" "}
          All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: [license-url] */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>

  )
}

export default Footer