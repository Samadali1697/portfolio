import React from "react";
import styles from './NavigationBar.module.css';
import profileImage from '../../data/images/sam.jpeg'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { portfolioData } from '../../data/content';
import classes from "../journey/Journey.module.css";

export default function NavigationBar() {
    return (
        <div>
            <div className={styles.r1}>
                {portfolioData.profile.bio.map((details) => {
                    return (<p className={classes.activitiesParagraphs}>{details}</p>);
                })}
                <h1>{portfolioData.profile.name}</h1>
            </div>

            <div className={styles.r2}>
                <img src={profileImage} alt={"Samad Ali Shah"} />
                <p className={styles.gmail}><FontAwesomeIcon icon={faEnvelope}/> {portfolioData.profile.socialLinks.email}</p>
            </div>

            <div className={styles.socialCard}>
                <div className={styles.r3Items}><Link smooth to="/#about" className={styles.links}>About</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#journey" className={styles.links}>Journey</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#interest" className={styles.links}>Interest</Link></div>
            </div>

            <div className={styles.r4}>
                <div className={styles.socialCard}>
                    <div className={styles.socialCardIcons}> <a href={portfolioData.profile.socialLinks.github} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={portfolioData.profile.socialLinks.linkedIn} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faLinkedin}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={portfolioData.profile.socialLinks.twitter} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faTwitter}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={portfolioData.profile.socialLinks.instagram} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faInstagram}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={"mailto:" + portfolioData.profile.socialLinks.email} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faEnvelope}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={portfolioData.profile.socialLinks.facebook} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faFacebook}/></a></div>
                </div>
            </div>
        </div>
    );
}
