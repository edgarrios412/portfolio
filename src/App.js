/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-scroll";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { useRef } from "react";
import Project from "./components/Project/Project";
import MyProjects from "./MyProjects.js";
import pdf from "./cv.pdf"

function App() {
  const ref = useRef();
  const loaderRef = useRef();
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  useEffect(() => {
    ref.current.style.opacity = 0;
    setTimeout(() => {
      loaderRef.current.style.opacity = 0;
      ref.current.style.opacity = 1;
      setTimeout(() => {
        loaderRef.current.style.display = "none";
      }, 300);
    }, 3500);
  }, []);

  const [selectedId, setSelectedId] = useState(null)
  const [project, setProject] = useState()
  const fn = (id) => {
    setSelectedId(id)
    setProject(MyProjects[id-1])
  }

  return (
    <>
      <Particles className="particulas" options={particlesConfig} init={particlesInit} />
      <div className="oscuro" ref={loaderRef}>
        <img alt="img" className="iconito" src="./icon.png"></img>
      </div>
      <nav className="nav">
        <img alt="img" className="logo" src="./logo2.png"></img>
        <p className="nombre">EDGAR VILCHEZ</p>
        <ul className="ul">
          <li className="li">
            <Link to="p1" spy={true} smooth={true} offset={0} duration={900}>
              HOME
            </Link>
          </li>
          <li className="li">
            <Link to="about" spy={true} smooth={true} offset={0} duration={900}>
              ABOUT
            </Link>
          </li>
          <li className="li">
            <Link to="tech" spy={true} smooth={true} offset={0} duration={900}>
              TECH
            </Link>
          </li>
          <li className="li">
            <Link to="work" spy={true} smooth={true} offset={0} duration={900}>
              PROJECT
            </Link>
          </li>
          {/* <li className="li">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
            >
              CONTACT
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="p1" id="p1">
        <p className="llave">&#123;</p>
        <p className="otrallave">&#125;</p>
        <p className="textx">EDGAR VILCHEZ</p>
        <p className="text">FULLSTACK</p>
        <p className="texto">DEVELOPER</p>
      </div>

      <div className="about" id="about">
        <h1 className="txt">
          ABOUT <b className="morado">ME</b>
        </h1>
        <img alt="img" className="pj" src="./astronauta.png"></img>
        <div ref={ref} className="yo">
          Hola soy <b className="morado">Edgar</b>, un apasionado desarrollador{" "}
          <b className="morado">Full Stack</b> de 21 años , siempre en busca de
          nuevos desafíos y oportunidades para crear soluciones{" "}
          <b className="morado">innovadoras</b>. Si buscas un desarrollador{" "}
          <b className="morado">Full Stack</b> para tu próximo proyecto,{" "}
          <b className="morado">contactame</b>. ¡Estoy deseando hacer realidad
          tus ideas!
        </div>
        <a
          href="https://www.linkedin.com/in/edgarrios412/"
          rel="noopener noreferrer"
          className="prueba"
          target="_blank"
        >
          <img alt="img" className="social" src="./linkedin.png"></img>
        </a>
        <a
          href="https://www.github.com/edgarrios412/"
          rel="noopener noreferrer"
          className="pruebas"
          target="_blank"
        >
          <img alt="img" className="social" src="./github.png"></img>
        </a>
        <a
          href={pdf}
          download="CV-EdgarVilchez.pdf"
          rel="noopener noreferrer"
          className="pruebass"
          target="_blank"
        >
          <img alt="img" className="social" src="./cv.png"></img>
        </a>
      </div>

      <div className="tech" id="tech">
        <h1 className="txt">
          TECH <b className="azul">SKILLS</b>
        </h1>
        <div className="tech-container">
          <div className="box">
            <div className="icon_container">
              <div className="icons">
                <img alt="img" className="img" src="./front-end.png"></img>
                <p className="title-section azul">FRONTEND</p>
              </div>
              <div className="skills">
                <img className="skill" src="./skills/html.png"></img>
                <img className="skill" src="./skills/css.png"></img>
                <img className="skill" src="./skills/javascript.png"></img>
                <img className="skill" src="./skills/react.png"></img>
                <img className="skill" src="./skills/nextjs.png"></img>
              </div>
            </div>
          </div>
          <div className="box">
              <div className="icon_container">
                <div className="icons">
                  <img alt="img" className="img" src="./coding.png"></img>
                  <p className="title-section azul">BACKEND</p>
                </div>
                <div className="skills">
                {/* <img className="skill" src="./skills/web.png"></img> */}
                <img className="skill" src="./skills/express.png"></img>
                <img className="skill" src="./skills/sequelize.png"></img>
                <img className="skill" src="./skills/node.png"></img>
                <img className="skill" src="./skills/jwt.png"></img>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon_container">
              <div className="icons">
                <img alt="img" className="img" src="./db.png"></img>
                <p className="title-section azul">DATABASE</p>
              </div>
              <div className="skills">
                {/* <img className="skill" src="./skills/web.png"></img> */}
                <img className="skill" src="./skills/postgresql.png"></img>
                <img className="skill" src="./skills/mysql.png"></img>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon_container">
              <div className="icons">
                <img alt="img" className="img" src="./design.png"></img>
                <p className="title-section azul">DESIGN</p>
              </div>
              <div className="skills">
                {/* <img className="skill" src="./skills/web.png"></img> */}
                <img className="skill" src="./skills/figma.png"></img>
                <img className="skill" src="./skills/ilustrator.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work" id="work">
        <h1 className="txt">
          RECENT <b className="morado">PROJECTS</b>
        </h1>
        <div className="container">
          {MyProjects.map((p,i) => (
            <Project
              id={i+1}
              fn={fn}
              title={p.title}
              deploy={p.deploy}
              color={p.color}
              github={p.github}
              desc={p.desc}
            />
          ))}
        </div>
        {selectedId && <div className="modal" onClick={() => setSelectedId(null)}>
            <div className="modal-container" style={{backgroundColor:`${project.color}`}} >
              <div className="left"><img className="img-app" src={project.img}/></div>
              <div className="right">
              <h2 className="titulo-project">{project.title}</h2>
              <h4 className="description">{project.desc}</h4>
              <h3 style={{color:"black"}}>Tecnologias usadas</h3>
              <div className="tech-used">
                {project.tech.map(t => <img className="skillmini" src={`./skills/${t}.png`}/>)}
              </div>
              </div>
              </div>
        </div>}
      </div>
      {/* <div className="contact" id="contact">
        <h1 className="txt">
          CONTACT <b className="azul">ME</b>
        </h1>
        <div className="formulario">
          <div className="pregunta azul">¿TE INTERESA MI PERFIL?</div>
          <form
            className="form"
            action="https://formsubmit.co/edgarrios412@gmail.com"
            method="POST"
          >
            <input ref={nameRef} name="Nombre" placeholder="Nombre" />
            <input ref={emailRef} name="Email" placeholder="Email" />
            <input ref={msgRef} name="Mensaje" placeholder="Mensaje" />
            <div className="button">
              <input
                onClick={cancel}
                className="no"
                type="button"
                value="Cancelar"
              />
              <input onClick={submit} className="si" type="submit" />
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://edgar.up.railway.app/"
            ></input>
          </form>
        </div>
        <p className="voz" ref={vozRef}>
          Hola, soy yo de nuevo
        </p>
        <img
          alt="img"
          ref={pjRef}
          className="astronauta"
          src="./astro-hi.png"
        ></img>
        <img alt="img" className="footer" src="./luna.png"></img>
      </div> */}
    </>
  );
}

export default App;
