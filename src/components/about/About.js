import React from 'react'
import styles from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function About() {
    return (
        <div className={styles.box} id="about">
            <ScrollAnimation offset={0} animateIn="animate__fadeInLeftBig" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className={styles.head}>ABOUT ME</span>
                <h2 className={styles.heading}>Who Am I?</h2>
                <div className={styles.About}>
                    <p> I am <b>Samad Ali Shah</b> a FullStack Software Engineer, currently working full-time Engineer in Berlin, Germany.
                        I have done my Bachelors in Computer Software Engineering from Institute of Management Sciences, Peshawar Pakistan. </p>
                    <p className={styles.br}>As a highly motivated computer professional with the enthusiasm to accept challenges, working on new technologies interests me considerably. With hands-on experience using different programming languages to design and implement Android, Web and embedded applications, I am confident that one day I will contribute in making this world a better place in a true sense. </p>
                </div>
            </ScrollAnimation>
        </div>
    );
}
