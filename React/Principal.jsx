import React from "react";
import "./principal.css";
import { Link } from "react-router-dom";

const logo = "/logo.jpg";
const Facebook = "/Facebook.jpg";
const Google = "/Google.jpg";
const Instagram = "/Instagram.jpg";
const youtube = "/youtube.jpg";
const Reunião = "/Reunião.jpg";

const Principal = () => {
  return (
    <>
      <header>
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="titulo">
          <h1>Right Selection - Sinônimo de Eficiência</h1>
          {/*<nav>
            <ul>
              <li>
                <Link to="/Test">Teste Tecnico</Link>
              </li>
              <li>
                <Link to="/Tela4">Teste de Personalidade</Link>
              </li>
              <li>
                <Link to="/Concluir/Final">Concluir</Link>
              </li>
            </ul>
          </nav>*/}
        </div>
      </header>

      <section className="listContainer">
        <div>
          <h2>Quem somos nós?</h2>
          <br></br>
          <p>
            <h3>
              Somos um sistema que trabalha de forma eficaz para a contratação
              de funcionários para a sua empresa. Utilizamos testes de
              personalidade e testes técnicos para que sua empresa possa
              encontrar profissionais com facilidade e assertividade. Com isso,
              será mais fácil selecionar sua equipe de acordo com a requisição
              da sua empresa.
            </h3>
          </p>
          <p>
            <img className="Reunião" src={Reunião} alt="Reunião"></img>
          </p>
          <a href="www.facebook.com.br">
            <img className="Facebook" src={Facebook} alt="Facebook"></img>
          </a>
          <a href="www.google.com.br">
            <img className="Google" src={Google} alt="Google"></img>
          </a>
          <a href="www.instagram.com.br">
            <img className="Instagram" src={Instagram} alt="Instagram"></img>
          </a>
          <a href="www.youtube.com.br">
            <img className="youtube" src={youtube} alt="youtube"></img>
          </a>
        </div>
        <div>
          <h2>Evolua sua forma de contratar com a Rigth Selection</h2>
          <br></br>
          <ul>
            <h4>
              <li id="tx2">
                Conte para nós um pouco sobre o que a empresa busca em um
                profissional
              </li>
            </h4>
            <h4>
              <li id="tx2">
                Monte uma seleção de personalidade que busca em um profissional
              </li>
            </h4>
            <h4>
              <li id="tx2">
                Selecione um teste técnico para que possa captar as habilidades
                do profissional
              </li>
            </h4>
            <h4>
              <li id="tx2">
                Visualize quais candidatos estão se saindo melhor por meio dos
                nossos gráficos e feedbacks da nossa plataforma
              </li>
            </h4>
          </ul>
          <div><Link to="/Tela4">

            <button2>Iniciar</button2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Principal;
