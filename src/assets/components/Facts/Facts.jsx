import React from 'react'
import './Facts.css';

function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={2}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={4}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={36}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Hours of Support</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={2}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Awards/Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Facts