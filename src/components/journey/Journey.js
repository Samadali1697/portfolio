import React from 'react';
import classes from './Journey.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {faSchool, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Journey() {
    return (
        <div className={classes.box} id="education">
            <ScrollAnimation offset={0} animateIn="animate__fadeInLeftBig" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>MY JOURNEY</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                <FontAwesomeIcon icon={faBriefcase}/>
                                            </div>
                                            <div className={classes.label}>
                                                <h2>Software Engineer II <span>September, 2020 - Present</span></h2>
                                                <h4>Wayfair</h4>
                                                <p>Fulfillment Network,<br/>
                                                    - decoupled processes into microservices keeping the lights ON!</p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                <FontAwesomeIcon icon={faBriefcase}/>
                                            </div>
                                            <div className={classes.label}>
                                                <h2>Software Engineer <span>May, 2019 - August, 2020</span></h2>
                                                <h4>Wayfair</h4>
                                                <p>Fulfillment Network,<br/>
                                                    - Contributed in revamping multiple process, designed, estimated and lead multiple initiatives!</p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                <FontAwesomeIcon icon={faSchool}/>
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >BS in Software Engineering <span>2014 - 2018</span></h2>
                                                <h4>Institute of Management Sciences, Peshawar Pakistan</h4>
                                                <p>- Led and contributed to the team while competing at National Hult Prize 2018<br/>
                                                    - Second runner up in RoboNavigation at IEEE Week 2016 – Fast Lahore</p>
                                            </div>
                                            <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                        </article>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}
