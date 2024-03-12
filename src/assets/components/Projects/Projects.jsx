import React from 'react'
import EvangadiForum3 from "../../img/portfolio/EvangadiForum3.png";
import AmazonClone from "../../img/portfolio/Amazon.png";
import NetflixClone from "../../img/portfolio/Netflix.png";
import AppleClone from "../../img/portfolio/Apple.png";
import MU from "../../img/stack-icons/materialui.svg";
import JS from "../../img/stack-icons/javascript.svg" ;
import BS from "../../img/stack-icons/bootstrap.svg";
import react from "../../img/stack-icons/react.svg";
import node from "../../img/stack-icons/node.svg";
import express from "../../img/stack-icons/express.svg" ;
import firebase from "../../img/stack-icons/firebase.svg";

function Projects() {
  return (
    <section id="portfolio">
    <h1 className="mb-md-5">PROJECTS</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-3">

          <div className='project_wrapper'>
            <div className="project " data-aos="flip-up" data-aos-duration={1000}>
              <img
                src={EvangadiForum3}
                alt="Evangadi Q&A Forum"
              />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100">
                  <p className="text-center">
                    Evangadi Question &amp; Answer Forum Website
                  </p>
                  <div className="links_project">
                    <a
                      href="https://github.com/Nati-Ti/EvangadiForum"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="source code"
                    >
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="https://evangadi-forum-by-nati94.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="live demo"
                    >
                      <i className="bi bi-eye-fill" />
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img
                        src={react}
                        alt="React"
                        title="React"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={MU}
                        alt="MaterialUI"
                        title="MaterialUI"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={express}
                        alt="Express"
                        title="Express"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='project_wrapper'>
            <div className="project" data-aos="flip-up" data-aos-duration={1000}>
              <img src={AmazonClone} alt="Amazon-cloned WebApp" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100">
                  <p className="text-center">
                    Cloned website of the E-commerce giant Amazon, provides users
                    with a platform to browse and purchase a wide range of products
                  </p>
                  <div className="links_project">
                    <a
                      href="https://github.com/Nati-Ti/Amazon-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="source code"
                    >
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="https://amazon-clone-by-nati94.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="live demo"
                    >
                      <i className="bi bi-eye-fill" />
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img
                        src={react}
                        alt="React"
                        title="React"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={node}
                        alt="Node"
                        title="Node"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={firebase}
                        alt="Firebase"
                        title="Firebase"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='project_wrapper'>
            <div className="project" data-aos="flip-up" data-aos-duration={1000}>
              <img src={NetflixClone} alt="Netflix-replica WebApp" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100">
                  <p className="text-center">
                    A Netflix cloned website that replicates the main features and
                    functionalities of the popular streaming service Netflix.
                  </p>
                  <div className="links_project">
                    <a
                      href="https://github.com/Nati-Ti/Netflix-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="source code"
                    >
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="https://nati94-netflixclone.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="live demo"
                    >
                      <i className="bi bi-eye-fill" />
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img
                        src={BS}
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={JS}
                        alt="JavaScript"
                        title="JavaScript"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={react}
                        alt="React"
                        title="React"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={react}
                        alt="React"
                        title="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='project_wrapper'>
            <div className="project" data-aos="flip-up" data-aos-duration={1000}>
              <img src={AppleClone} alt="Apple-cloned app" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100">
                  <p className="text-center">
                    A replica or clone of the official Apple website, created with
                    the intention to mimic the design, layout of the original site.
                  </p>
                  <div className="links_project">
                    <a
                      href="https://github.com/Nati-Ti/Apple-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="source code"
                    >
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="https://apple-clone-by-nati94.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="live demo"
                    >
                      <i className="bi bi-eye-fill" />
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img
                        src={BS}
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img
                        src={react}
                        alt="React"
                        title="React"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <p className="text-center mt-4">
          <a
            href="https://github.com/Nati-Ti"
            target="_blank"
            className="btn btn-outline-accent btn-lg rounded-pill"
          >
            See more <i className="bi bi-github fs-4" />
          </a>
        </p>
    </section>

  )
}

export default Projects