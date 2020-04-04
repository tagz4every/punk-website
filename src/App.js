import React, {Fragment} from 'react'; //imr
import Header from './containers/header/Header';
import Knowledge from './containers/knowledge/Knowledge';

const App = () => { //sfc
    return (
        <Fragment>
            <Header/>
            <Knowledge/>
        </Fragment>
     );
}
 
export default App;