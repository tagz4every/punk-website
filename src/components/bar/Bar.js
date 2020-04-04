import React from 'react';
import './Bar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Bar(props) {
	
    return (
        <div className="barra">
			<p style={{color: props.colorBarra}}><FontAwesomeIcon icon={props.icono} /></p>
			<div className="progress-bar">
				<span className="bar">
			        <span className={`progress ${props.bottom ? props.animation:''}`} style={{backgroundColor: props.colorBarra}}></span>
			    </span>
			</div>
		</div>
    );
}
 
export default Bar;