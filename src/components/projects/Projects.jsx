import React from "react";
import "./Projects.css";
import List from '../../assets/to-do-list.png'
import Cuphead from '../../assets/cuphead.png'
import God from '../../assets/Captura de tela 2025-01-31 164052.png'

const Projects = () => {
const handleClick = (e) => {
    e.preventDefault();
    alert("Projeto indisponível no momento.");
};

return (
    <>
        <section className="projects">
            <div className="container">
                <h2 id="proj">Melhores Projetos</h2>
                <div className="cards">
                    <div className="card">
                        <img src={List} alt="Projeto 1" className="card-img"/>
                        <h3>To-do list</h3>
                        <p>
                            Projeto de uma simples lista de tarefas feita em ReactJs e Vite
                        </p>
                        <a href="https://github.com/andre-0303/lista-tarefas-react">
                            Ver no GitHub
                        </a>
                        <a href="https://andre-0303.github.io/lista-tarefas-react/">Ver Projeto</a>
                    </div>
                    <div className="card">
                        <img src={Cuphead} alt="Projeto 1" className="card-img" style={{
                            objectFit:"cover"
                        }}/>
                        <h3>Landing Page Cuphead</h3>
                        <p>
                            Landing Page do jogo Cuphead feita em HTML, CSS e JS
                        </p>
                        <a href="https://github.com/andre-0303/Lading-page-Cuphead">
                            Ver no GitHub
                        </a>
                        <a href="https://andre-0303.github.io/Lading-page-Cuphead/">Ver Projeto</a>
                    </div>
                    <div className="card">
                        <img src={God} alt="Projeto 1" className="card-img"/>
                        <h3>Landing Page God of War</h3>
                        <p>
                            Landing Page do jogo God of War feita em ReactJs e Vite
                        </p>
                        <a href="https://github.com/andre-0303/landind-page-god">
                            Ver no GitHub
                        </a>
                        <a href="" onClick={handleClick}>Ver Projeto</a>
                    </div>
                </div>
                <h3 style={{marginTop:"40px"}}>Para mais projetos, acesse meu <a href="https://github.com/andre-0303" style={{color:"#00c8ff"}}>GitHub</a></h3>
            </div>
        </section>
    </>
);
};

export default Projects;
