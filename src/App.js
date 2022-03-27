import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import NavigationBar from "./components/navigationbar/NavigationBar";

const App = () => {
    return (
        <div className="homeBase">
            <Router>
                <div className="navBar">
                    <NavigationBar />
                </div>
                <div className="homeBar">
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
