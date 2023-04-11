import { useCallback } from "react";
import "./App.css";
import {Link} from "react-scroll"
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { useRef } from "react";

function App() {
  const pjRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const msgRef = useRef()
  const vozRef = useRef()
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const submit = () => {
    pjRef.current.src = "./astro-hearth.png"
    nameRef.current.value= ""
    emailRef.current.value= ""
    msgRef.current.value= ""
    vozRef.current.innerHTML= "En cuanto pueda te contactare"
  }
  const cancel = () => {
    pjRef.current.src = "./astro-cry.png"
    nameRef.current.value= ""
    emailRef.current.value= ""
    msgRef.current.value= ""
    vozRef.current.innerHTML= "Seguiremos mejorando:("
  }

  return (
    <>
      <Particles options={particlesConfig} init={particlesInit} />
      <nav className="nav">
        <img alt="img" className="logo" src="./logo2.png"></img>
        <p className="nombre">EDGAR VILCHEZ</p>
    <ul className="ul">
      <li className="li"><Link to="p1" spy={true} smooth={true} offset={0} duration={900}>HOME</Link></li>
      <li className="li"><Link to="about" spy={true} smooth={true} offset={0} duration={900}>ABOUT</Link></li>
      {/* <li className="li"><Link to="tech" spy={true} smooth={true} offset={0} duration={900}>TECH</Link></li> */}
      <li className="li"><Link to="work" spy={true} smooth={true} offset={0} duration={900}>PROJECT</Link></li>
      <li className="li"><Link to="contact" spy={true} smooth={true} offset={0} duration={900}>CONTACT</Link></li>
    </ul>
  </nav>
      <div className="p1" id="p1">
        <p className="llave">&#123;</p>
        <p className="otrallave">&#125;</p>
        <p className="text">FULLSTACK</p>
        <p className="texto">DEVELOPER</p>
      </div>

      <div className="about" id="about">
        <h1 className="txt">
          ABOUT <b className="morado">ME</b>
        </h1>
        <img alt="img" className="pj" src="./astronauta.png"></img>
        <div className="yo">
        Hola soy <b className="morado">Edgar</b>, un apasionado desarrollador <b className="morado">Full Stack</b> de 21 años
        , siempre en busca de nuevos desafíos y oportunidades para crear soluciones <b className="morado">innovadoras</b>. Si buscas un desarrollador <b className="morado">Full Stack</b> apasionado y motivado para tu próximo proyecto, <b className="morado">contactame</b>. ¡Estoy deseando hacer realidad tus ideas!
        </div>
        <img alt="img" className="social" src="./github.png"></img>
        <img alt="img" className="social" src="./linkedin.png"></img>
      </div>

      {/* <div className="tech" id="tech">
        <h1 className="txt">
          TECH <b className="azul">SKILLS</b>
          <div className="tech-container">
            <div className="box">
              <div className="box-body">
              <div className="icon_container">
                <div className="icons">
                  <img alt="img" className="img" src="./front-end.png"></img>
                </div>
              </div>
              </div>
            </div>
            <div className="box">
            <div className="box-body">
            <div className="icon_container">
                <div className="icons">
                  <img alt="img" className="img" src="./coding.png"></img>
                </div>
              </div>
            </div>
            </div>
            <div className="box">
            <div className="box-body">
            <div className="icon_container">
                <div className="icons">
                  <img alt="img" className="img" src="./db.png"></img>
                </div>
              </div>
            </div>
            </div>
            <div className="box">
              <div className="box-body">
                <div className="icon_container">
                <div className="icons">
                  <img alt="img" className="img" src="./design.png"></img>
                </div>
              </div>
              </div>
            </div>
          </div>
        </h1>
      </div> */}
      <div className="work" id="work">
        <h1 className="txt">
          RECENT <b className="morado">PROJECTS</b>
        </h1>
        <div className="container">

          <div className="project-container1">
            <h2 className="title">RICK AND MORTY</h2>
            <div className="buttons">
              <a href="https://apprym.netlify.app/" target="_blank"><img alt="img" className="icon" src="./web.png" /></a>
              <a href="https://github.com/edgarrios412/app-rickandmorty" target="_blank"><img alt="img" className="icon" src="./github.png" /></a>
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
          <div className="project-container2">
          <h2 className="title">FOX BOOK</h2>
          <div className="buttons">
              <img alt="img" className="icon" src="./web.png" />
              <img alt="img" className="icon" src="./github.png" />
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
          <div className="project-container3">
          <h2 className="title">CLIMA APP</h2>
          <div className="buttons">
              <img alt="img" className="icon" src="./web.png" />
              <img alt="img" className="icon" src="./github.png" />
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
          <div className="project-container4">
            <h2 className="title">FOOD APP</h2>
            <div className="buttons">
              <img alt="img" className="icon" src="./web.png" />
              <img alt="img" className="icon" src="./github.png" />
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
          <div className="project-container5">
          <h2 className="title">COOMING SOON</h2>
          <div className="buttons">
              <img alt="img" className="icon" src="./web.png" />
              <img alt="img" className="icon" src="./github.png" />
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
          <div className="project-container">
          <h2 className="title">COOMING SOON</h2>
          <div className="buttons">
              <img alt="img" className="icon" src="./web.png" />
              <img alt="img" className="icon" src="./github.png" />
              <img alt="img" className="icon" src="./informacion.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1 className="txt">
          CONTACT <b className="azul">ME</b>
        </h1>
        <div className="formulario">
          <div className="pregunta azul">
          ¿TE INTERESA MI PERFIL?
          </div>
          <form className="form">
            <input ref={nameRef} placeholder="Nombre"/>
            <input ref={emailRef} placeholder="Email"/>
            <input ref={msgRef} placeholder="Mensaje"/>
          </form>
          <div className="button">
        <div className="no" onClick={cancel}>CANCELAR</div>
        <div className="si" onClick={submit}>ENVIAR</div>
        </div>
        </div>
        <p className="voz" ref={vozRef}>Hola, soy yo de nuevo</p>
      <img alt="img" ref={pjRef} className="astronauta" src="./astro-hi.png"></img>
        <img alt="img" className="footer" src="./luna.png"></img>
      </div>
    </>
  );
}

export default App;
