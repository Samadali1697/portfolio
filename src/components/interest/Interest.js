import React from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function Interest() {
    return (
        <div className={classes.box} id="interest">
            <ScrollAnimation offset={0} animateIn="animate__fadeInRightBig" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>WHAT I DO?</span>
                <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
                <div className={classes.Interest}>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.web}>
                            <h3>Development</h3>
                            <p>Having knowledge of several development technologies. Web, mobile and embedded are some of the core areas I have worked on during my studies.<br />
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.app}>
                            <h3>Infrastructure</h3>
                            <p>I have great interest towards infrastructure. Especially the underlying technologies that we use in our different projects.<br />
                            I have working experience with Docker, Kubernetes and now learning Cloud Computing. This website is hosted on GCP btw! :)</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.other}>
                            <h3>Other's Interest</h3>
                            <p>
                                - I love traveling and exploring new areas.<br/>
                                - I have done Sky diving <a target="_blank" href="https://www.youtube.com/watch?v=UDGfDlLRj1o"><b>in Berlin</b></a> 8)<br />
                                - Ich learne Deutsch, currently at B1.1 module.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </div>
    );
}
