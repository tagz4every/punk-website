import React, {Fragment} from 'react'; //imr

import Header from './containers/header/Header';
import Knowledge from './containers/knowledge/Knowledge';
import About from './containers/about/About';
import Navbar from './components/navbar/Navbar';
import Contact from './containers/contact/Contact';

const App = () => { //sfc
    return (
        <Fragment>
            <Navbar/>
            <Header/>
            <Knowledge/>
            <About/>
            <Contact/>
        </Fragment>
     );
}
 
export default App;