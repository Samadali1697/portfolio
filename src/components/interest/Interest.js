import React from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { portfolioData } from '../../data/content';

export default function Interest() {
    return (
        <div className={classes.box} id="interest">
            <ScrollAnimation offset={0} animateIn="animate__fadeInRightBig" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>WHAT I DO?</span>
                <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
                <div className={classes.Interest}>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC1}>
                            <h3>Development</h3>
                            {portfolioData.interest.development.map((details) => {
                                return (<p className={classes.interestParagraphs}>{details}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC2}>
                            <h3>Infrastructure</h3>
                            {portfolioData.interest.infrastructure.map((details) => {
                                return (<p className={classes.interestParagraphs}>{details}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC3}>
                            <h3>Other Interests</h3>
                            {portfolioData.interest.otherInterests.map((interest) => {
                                return (<p className={classes.interestParagraphs}>{interest}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </div>
    );
}
