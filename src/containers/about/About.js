import React from 'react';
import './About.sass';
import Separador from '../../components/separador/Separador';

const About = () => {
    return (
        <div id="acercademi" className="contenedor">
            <Separador titulo="ACERCA DE MI" />
            <div className="framework-loop"></div>
            <div className="pink-background"></div>
            <div className="grid">
                <div className="text">
                    <p>¡Hola! Mi nombre es <span>Julio Reyes</span> (A.K.A Tagz).<br/>
                    Soy un estudiante de ingeniería en la <span>Universidad del Bío Bío</span> y me especializo en tecnologías web <span>Front-End</span>.
                    <br/>Estoy en busca de trabajo y experiencia.<br/>
                    No me gusta subir fotos mías así que uso gatos chistosos que encuentro en Google Images.
                    </p>
                </div>
                <div className="gato">
                    <img src={require('../../assets/cat3.png')} alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default About;