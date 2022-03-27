import React from "react";
import { Text } from "react-native";
import styles from './NavigationBar.module.css';
import profileImage from '../images/sam.jpeg'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function NavigationBar() {
    return (
        <div>
            <div className={styles.r1}>
                <Text># developer_life{"\n"}# hello_world{"\n"}# coding{"\n"}# software_engineering</Text>
                <h1>Samad Ali Shah</h1>
            </div>

            <div className={styles.r2}>
                <img src={profileImage} alt={"Samad Ali Shah"} />
                <p className={styles.gmail}><FontAwesomeIcon icon={faEnvelope}/> samadali1697@gmail.com</p>
            </div>

            <div className={styles.socialCard}>
                <div className={styles.r3Items}><Link smooth to="/#about" className={styles.links}>About</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#education" className={styles.links}>Education</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#interest" className={styles.links}>Interest</Link></div>
            </div>

            <div className={styles.r4}>
                <div className={styles.socialCard}>
                    <div className={styles.socialCardIcons}> <a href="https://github.com/Samadali1697" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className={styles.socialCardIcons}> <a href="https://www.linkedin.com/in/samadali1697" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faLinkedin}/></a></div>
                    <div className={styles.socialCardIcons}> <a href="https://twitter.com/shahsamadali" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faTwitter}/></a></div>
                    <div className={styles.socialCardIcons}> <a href="https://www.instagram.com/syed.samad.ali/" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faInstagram}/></a></div>
                    <div className={styles.socialCardIcons}> <a href="mailto:samadali1697@gmail.com" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faEnvelope}/></a></div>
                    <div className={styles.socialCardIcons}> <a href="https://www.facebook.com/SyedSamadAliShah" rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faFacebook}/></a></div>
                </div>
            </div>


        </div>
    );
}
