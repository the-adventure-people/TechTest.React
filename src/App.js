import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                    <Routes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
