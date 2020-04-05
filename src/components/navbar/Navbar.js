import React, {Fragment} from 'react';
import './Navbar.sass';

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <p className="tagz-logo">
                    TAGZ
                </p>
                <div className="navigation">
                    <a href="#header">HOME</a>
                    <a href="#servicios">SERVICIOS</a>
                    <a href="#acercademi">ABOUT</a>
                    <a href="#contacto">CONTACTO</a>
                </div>
                
            </nav>
            <div className="gradiente"></div>
        </Fragment>
    );
}
 
export default Navbar;