import React from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Interest = (props) => {
    return (
        <div className={classes.box} id="interest">
            <ScrollAnimation offset={0} animateIn="animate__fadeInRightBig" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>WHAT I DO?</span>
                <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
                <div className={classes.Interest}>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC1}>
                            <h3>Development</h3>
                            {props.interest.development.map((details, index) => {
                                return (<p className={classes.interestParagraphs} key={index}>{details}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC2}>
                            <h3>Infrastructure</h3>
                            {props.interest.infrastructure.map((details, index) => {
                                return (<p className={classes.interestParagraphs} key={index}>{details}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className={classes.interestC3}>
                            <h3>Other Interests</h3>
                            {props.interest.otherInterests.map((interest, index) => {
                                return (<p className={classes.interestParagraphs} key={index}>{interest}</p>);
                            })}
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default Interest;
