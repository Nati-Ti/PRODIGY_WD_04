import React from 'react'
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Natnael Tibebu Workneh</h4>
              <p>
                I have a proven track record of delivering high-quality solutions
                that exceed expectations.{" "}
              </p>
              <ul>
                <li>Addis Ababa, Ethiopia</li>
                <li>(251) 908-781-851</li>
                <li>natnaelti94@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Backend Developer - Intern</h4>
              <h5>2023 (4-Months)</h5>
              <p><em>Perago Information System, AA, ETH </em></p>
              <ul>
                <li>Design and built Database models and API endpoints with using ASP.NET Core MVC</li>
                <li>Implementing clean architecture, validation, CQRS pattern and so many other tasks.</li>
                <li>Collaborate with team members. </li>
              </ul>
            </div>
            
          </div>
          <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Full Stack Web Development</h4>
              <h5>December 2023</h5>
              <p>
                <em>Evangadi Tech</em>
              </p>
              <p>
                MERN-Stack (MySql, Express, React and Node)
                Through dedicated study and hands-on projects, I've cultivated a comprehensive understanding of frontend and backend technologies, enabling me to create dynamic and scalable web applications. Proficiency in React empowers me to craft intuitive user interfaces, while Node.js and Express facilitate robust server-side development. My proficiency in MySQL ensures effective database management, while ongoing learning initiatives ensure I remain at the forefront of MERN stack advancements. This education underscores my ability to tackle complex development challenges and deliver innovative solutions in the ever-evolving landscape of web development
              </p>
            </div>
            <div className="resume-item">
              <h4>Electrical &amp; Computer Engineering (B.Sc.)</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>Addis Ababa Science and Technology University</em>
              </p>
              <p>
              I have actively engaged in a diverse array of courses that have equipped me with a solid foundation in both electrical engineering and computer science domains. Through coursework in machine learning, I have delved into the cutting-edge field of artificial intelligence, mastering algorithms and techniques to extract insights from data. Courses in data structures and algorithms have honed my problem-solving skills and equipped me with the tools to develop efficient and scalable software solutions. Additionally, my studies in embedded systems, computer architecture, and microcontrollers have provided me with a deep understanding of hardware-software integration and low-level programming, essential for developing robust and optimized systems. 
              </p>
            </div>
            {/* <div className="resume-item">
              <h4>Financial Modeling &amp; Valuation Analyst (CFI FMVA)</h4>
              <h5>November 2022</h5>
              <ul>
                <li>
                  <em>Corporate Finance Institute (CFI)</em>
                </li>
                <li>
                  <em>Africa Leadership X (ALX Africa)</em>
                </li>
              </ul>
              <p>
                I possess a strong foundation in financial analysis, forecasting,
                and valuation. With expertise in Excel, VBA, and financial modeling
                software, I'm able to develop complex financial models and perform
                in-depth analyses of financial data to inform business decisions.
              </p>
            </div> */}



          {/* <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div> */}
          </div>
          {/* <div className="col-lg-4">
            <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Backend Developer</h4>
            <h5>2023 - 4mon</h5>
            <p><em>Perago Information System, AA, ETH </em></p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div>
          </div> */}
        </div>
      </div>
    </section>

  )
}

export default Resume