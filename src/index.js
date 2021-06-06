import React from 'react';
import ReactDOM from 'react-dom';

import Practice from './pages/Practice.jsx';

setInterval(tick,1000);

function tick(){
const HelloWorld = () => {
    return (
        <h1>
            Hello World!!
            <Practice/>
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
}