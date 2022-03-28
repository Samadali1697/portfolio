import React from "react";
import styles from './Home.module.css';
import About from "../about/About";
import Journey from "../journey/Journey";
import Interest from "../interest/Interest";

const Home = (props) => {
  return (
      <div className={styles.Home}>
            <div id="about">
                <About about={props.about}/>
            </div>

            <div id="interest">
                <Interest interest={props.interest}/>
            </div>

            <div id="journey">
                <Journey journey={props.journey}/>
            </div>
      </div>
  );
}

export default Home;
