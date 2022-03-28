import React from 'react'
import styles from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About = (props) => {
    return (
        <div className={styles.box} id="about">
            <ScrollAnimation offset={0} animateIn="animate__fadeInLeftBig" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className={styles.head}>ABOUT ME</span>
                <h2 className={styles.heading}>Who Am I?</h2>
                <div className={styles.About}>
                    <p> {props.about["1"]} </p>
                    <p className={styles.br}> {props.about["2"]} </p>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default About;
