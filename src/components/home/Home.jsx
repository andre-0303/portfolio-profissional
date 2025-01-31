import React from "react";
import Profile from '../../assets/profile.png'
import 'animate.css';
import './Home.css'

const Home = () => {
    return ( 
        <>
            <section>
                <div className="left">
                    <div className="content">
                        <p id="title" className="animate__animated animate__fadeInLeft">Front-End <br />Developer</p>
                        <p id="text" className="animate__animated animate__fadeInLeft">I like turning ideas into reality through programming and contributing to the world with my projects.</p>
                    </div>

                    <div className="skill">
                    <h1 className="animate__animated animate__fadeInUp">My Skills</h1>
                        <div>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JS" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original.svg" alt="React" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" className="animate__animated animate__bounce" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original.svg" alt="mysql" className="animate__animated animate__bounce" />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src={Profile} id="profile" alt="profile" />
                </div>
            </section>
        </>
     );
}
 
export default Home;