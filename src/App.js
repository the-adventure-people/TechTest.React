import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
// import classNames from 'classnames';
import './styles/app.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
