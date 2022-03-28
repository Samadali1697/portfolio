import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import NavigationBar from "./components/navigationbar/NavigationBar";
import {portfolioData} from "./data/Content";

const App = () => {
    return (
        <div className="homeBase">
            <Router>
                <div className="navBar">
                    <NavigationBar profile={portfolioData.profile}/>
                </div>
                <div className="homeBar">
                    <Routes>
                        <Route exact path="/" element={
                            <Home about={portfolioData.about} interest={portfolioData.interest} journey={portfolioData.journey}/>
                        }/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
