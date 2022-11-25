import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    return (
        <>
        <div className="container portfolio-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skills', ' ','&', ' ', 'Experience']}
              idx={15}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like 
            <span class="tech-tag"> HTML5</span>,
            <span class="tech-tag"> CSS3</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> jQuery</span>,
            <span class="tech-tag"> PHP</span>,
            <span class="tech-tag"> Angular</span>,
            <span class="tech-tag"> React</span>,
            <span class="tech-tag"> TypeScript</span>,
            <span class="tech-tag"> Flutter</span>,
            <span class="tech-tag"> Node</span>,
            <span class="tech-tag"> MongoDB</span>,
            <span class="tech-tag"> SQL</span>,
            <span class="tech-tag"> Bootstrap</span>,
            <span class="tech-tag"> Sass</span>,
            <span class="tech-tag"> Git</span>, etc.
          </p>

          <p align="LEFT">
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>

          <p>
            Visit my <span><a href="https://www.linkedin.com/in/louay-warwar/"
                              target="_blank"
                              rel="noreferrer">
                              LinkedIn
                            </a>
                     </span> profile for more details. Also you can 
            checkout my CV on this <span><a href="https://www.linkedin.com/in/louay-warwar/"
                                            target="_blank"
                                            rel="noreferrer">
                                            Link
                                        </a>
                                    </span>.
          </p>
        </div>

        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML5</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>

            <div className="info">
              <span>CSS3</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>

            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>

            <div className="info">
              <span>React</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>

            <div className="info">
              <span>Angular</span>
            </div>
            <div className="progress-line angular">
              <span></span>
            </div>

            <div className="info">
              <span>Flutter</span>
            </div>
            <div className="progress-line flutter">
              <span></span>
            </div>

            <div className="info">
              <span>Node</span>
            </div>
            <div className="progress-line node">
              <span></span>
            </div>

            <div className="info">
              <span>jQuery</span>
            </div>
            <div className="progress-line jquery">
              <span></span>
            </div>

          </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Skills;