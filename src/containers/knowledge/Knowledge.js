import React from 'react';
import './Knowledge.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular } from '@fortawesome/free-brands-svg-icons';
import Bar from '../../components/bar/Bar';
import Separador from '../../components/separador/Separador';

class Knowledge extends React.Component{


    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            bottom: false
        }
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight/2) {
          this.setState({bottom: true})
        }
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    render() {
        return (
            <div id="servicios" style={{background: "#ebebeb"}} className="contenedor">
                <Separador titulo="SERVICIOS" />
                <div className="conocimientos">
                    <p style={{color: "#f3642b"}}><FontAwesomeIcon icon={faHtml5} /></p>
                    <p style={{color: "#139fda"}}><FontAwesomeIcon icon={faCss3Alt} /></p>
                    <p style={{color: "#f0cd62"}}><FontAwesomeIcon icon={faJsSquare} /></p>
                    <p style={{color: "#139fda"}}><FontAwesomeIcon icon={faReact} /></p>
                    <p style={{color: "#e5303b"}}><FontAwesomeIcon icon={faAngular} /></p>
                </div>
                <div className="barras-gato">
                    <div className="gato">
                        <img src={require('../../assets/cat2.png')} alt="" />
                    </div>
                    <div className="barras">
                        <p>STATS</p>
                        <Bar colorBarra="#f3642b" icono={faHtml5} bottom={this.state.bottom} animation="progress-html"/>
                        <Bar colorBarra="#139fda" icono={faCss3Alt} bottom={this.state.bottom} animation="progress-css"/>
                        <Bar colorBarra="#f0cd62" icono={faJsSquare} bottom={this.state.bottom} animation="progress-js"/>
                        <Bar colorBarra="#139fda" icono={faReact} bottom={this.state.bottom} animation="progress-react"/>
                        <Bar colorBarra="#e5303b" icono={faAngular} bottom={this.state.bottom} animation="progress-angular"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Knowledge;