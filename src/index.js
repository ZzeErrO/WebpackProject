import React from 'react';
import ReactDOM from 'react-dom';

import Practice from './pages/Practice.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Parents from './components/Portal/Parents.jsx';

const HelloWorld = () => {
    return (
        <div>
        
        {/* <BrowserRouter>
            <Switch>
                <Route exact path = "/practice" component={Practice}/>
                <Route exact path = "/portals" components={Portals}/>
            </Switch>
        </BrowserRouter> */}

        <Parents/>

        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
