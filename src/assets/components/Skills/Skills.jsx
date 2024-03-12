import React from 'react'
import './Skills.css';
import html from "../../img/stack-icons/html.svg";
import css from "../../img/stack-icons/css.svg";
import MU from "../../img/stack-icons/materialui.svg";
import JS from "../../img/stack-icons/javascript.svg" ;
import BS from "../../img/stack-icons/bootstrap.svg";
import react from "../../img/stack-icons/react.svg";
import git from "../../img/stack-icons/git.svg";
import node from "../../img/stack-icons/node.svg";
import express from "../../img/stack-icons/express.svg" ;
import net from "../../img/stack-icons/dotnet.svg";
import csharp from "../../img/stack-icons/csharp.svg";
import mdb from "../../img/stack-icons/mongodb.svg";
import mysql from "../../img/stack-icons/MySql.svg";
import firebase from "../../img/stack-icons/firebase.svg";
import EC2 from "../../img/stack-icons/AWS_EC2.svg";
import ML from "../../img/stack-icons/ML.svg";

function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="section-title">
          <h2>Skills</h2>
          <p />
        </div>
      <div className="container skills_wrapper" data-aos="fade-up">
        
        <div className="row">
          <div className="col-6 col-md-3">
            <img src={html} alt="html" />
            <span>HTML</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={css} alt="css" />
            <span>CSS</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={MU} alt="MaterialUI" />
            <span>MaterialUI</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={JS} alt="javascript" />
            <span>JavaScript</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={BS}alt="bootstrap" />
            <span>Bootstrap</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={git} alt="git/github" />
            <span>Git</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={react} alt="react" />
            <span>React</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={node}alt="node" />
            <span>Node</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={express}alt="express" />
            <span>Express</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={csharp}alt="csharp" />
            <span>C#</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={net}alt="dotnet" />
            <span>.NET</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={mdb} alt="mongodb" />
            <span>MongoDB</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={mysql}alt="mysql" />
            <span>MySql</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={firebase}alt="firebase" />
            <span>Firebase</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={EC2}alt="AWS EC2" />
            <span>AWS EC2</span>
          </div>
          <div className="col-6 col-md-3">
            <img src={ML} alt="machine learning" />
            <span>Machine Learning</span>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills