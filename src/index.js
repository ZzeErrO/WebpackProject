import React from 'react';
import ReactDOM from 'react-dom';

import Practice from './pages/Practice.jsx';

setInterval(tick,1000);

function tick(){
const HelloWorld = () => {
    return (
        <div>
        <h1>
            Hello World!!
        </h1>
        <Practice/>
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
}