import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Practice from './pages/Practice.jsx';
import Parents from './components/Portal/Parents.jsx';
import App from './components/HOC/App.jsx';


const HelloWorld = () => {
    return (
        <div>
        
        {/* <BrowserRouter>
            <Switch>
                <Route exact path = "/practice" component={Practice}/>
                <Route exact path = "/portals" components={Portals}/>
            </Switch>
        </BrowserRouter> */}

        <App/>

        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
