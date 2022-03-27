import React from 'react';
import classes from './Journey.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {faSchool, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { portfolioData } from '../../data/content';

export default function Journey() {
    return (
        <div className={classes.box} id="journey">
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
                                                <h2>{portfolioData.journey.jobNow.title} <span>{portfolioData.journey.jobNow.when}</span></h2>
                                                <h4>{portfolioData.journey.jobNow.where}</h4>
                                                    {portfolioData.journey.jobNow.what.map((activities) => {
                                                        return (<p>{activities}</p>);
                                                    })}
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                <FontAwesomeIcon icon={faBriefcase}/>
                                            </div>
                                            <div className={classes.label}>
                                                <h2>{portfolioData.journey.jobOldLast.title} <span>{portfolioData.journey.jobOldLast.when}</span></h2>
                                                <h4>{portfolioData.journey.jobOldLast.where}</h4>
                                                    {portfolioData.journey.jobOldLast.what.map((activities) => {
                                                        return (<p>{activities}</p>);
                                                    })}
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                <FontAwesomeIcon icon={faSchool}/>
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >{portfolioData.journey.education.title} <span>{portfolioData.journey.education.when}</span></h2>
                                                <h4>{portfolioData.journey.education.where}</h4>
                                                    {portfolioData.journey.education.what.map((activities) => {
                                                        return (<p>{activities}</p>);
                                                    })}
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
