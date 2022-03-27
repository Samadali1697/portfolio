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
                    <p> I am <b>Samad Ali Shah</b> a FullStack developer, currently working as a full-time Engineer.
                        I have done my Bachelors in Computer Software Engineering from Institute of Management Sciences, Peshawar Pakistan.
                        I love playing around with new technologies and problems that enables me to handle problems and challenges with great enthusiasm and serenity. </p>
                    <p className={styles.br}>In this field, I am
                        looking forward to a promising technical job where I will be exposed to new developmental areas with a
                        friendly environment for learning and emerging of my own personality with professional and in time work. </p>
                </div>
            </ScrollAnimation>
        </div>
    )
}
