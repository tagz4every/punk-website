import React from 'react';
import './Separador.sass';

function Separador(props) {
    return (
        <div className="separador">
            <div className="decoraciones">
                <div className="bloque1"></div>
                <div className="bloque2"></div>
            </div>
            <p>{props.titulo}</p>
            <div className="decoraciones">
                <div className="bloque2"></div>
                <div className="bloque1"></div>
            </div>
        </div>
    );
}
 
export default Separador;