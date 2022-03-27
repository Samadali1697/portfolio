import React from "react";
import "./Home.module.css";
import style from './Home.module.css';
import About from "../about/About";
import Journey from "../journey/Journey";
import Interest from "../interest/Interest";

export default function Home() {
  return (
      <div className={style.Home}>
            <div id="about">
                <About />
            </div>

            <div id="interest">
                <Interest />
            </div>

            <div id="journey">
                <Journey />
            </div>
      </div>
  );
}
