import React from 'react';
import './Contact.sass';
import Separador from '../../components/separador/Separador';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div id="contacto" style={{background: '#1E1E1E'}} className="contenedor">
            <Separador titulo="Contacto"/>
            <p className="description">Si está interesado en contactarme o desea hacerme una pregunta puede usar uno de estos medios:</p>
            <div className="grid-contact">
                <div className="form">
                    <input type="text" placeholder="Nombre (Nota: Este form no está listo y no funciona)"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="¿Qué quieres decirme?" rows="5"></textarea>
                    <button>ENVIAR</button>
                </div>
                <div className="alternativas">
                    <div className="alternativa">
                        <p className="icon"><FontAwesomeIcon icon={faMapMarker}/></p>
                        <p className="text"><span className="bold">Tagz4Everyone</span>Chile - Región del Bío-Bío - Concepción</p>
                    </div>
                    <div className="alternativa">
                        <p className="icon"><FontAwesomeIcon icon={faWhatsapp}/></p>
                        <p className="text"><span>+56 9 45034689</span></p>
                    </div>
                    <div className="alternativa">
                        <p className="icon"><FontAwesomeIcon icon={faEnvelope}/></p>
                        <p className="text">julio.reyesc1998@gmail.com</p>
                    </div>
                    <div style={{height: '1px', width: '100%', backgroundColor: 'white', marginTop: '20px', boxSizing: 'border-box'}}></div>
                    <div className="redes">
                        <a href="https://twitter.com/Tagz4Every" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://es.stackoverflow.com/users/165763/tagz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow}/></a>
                        <a href="https://github.com/tagz4every" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Contact;