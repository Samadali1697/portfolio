import React from "react";
import { Text } from "react-native";
import './NavigationBar.css';
import profileImage from '../images/sam.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram, faMailchimp, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function NavigationBar() {
    return (
        <div>
            <div className="r1">
                <Text># developer_life{"\n"}# hello_world{"\n"}# coding{"\n"}# software_engineering</Text>
                <h1>Samad Ali Shah</h1>
            </div>

            <div className="r2">
                <img src={profileImage} alt={"Samad Ali Shah"} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><FontAwesomeIcon icon={faEnvelope}/> samadali1697@gmail.com</p>
            </div>

            <div className=".r4">
                <div className="social-card">
                    <div className="social-card-icons"> <a href="https://github.com/Samadali1697" rel="opener noreferrer" target="_blank" className="fa-lg"><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className="social-card-icons"> <a href="https://www.linkedin.com/in/samadali1697" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"><FontAwesomeIcon icon={faLinkedin}/></a></div>
                    <div className="social-card-icons"> <a href="https://twitter.com/shahsamadali" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"><FontAwesomeIcon icon={faTwitter}/></a></div>
                    <div className="social-card-icons"> <a href="https://www.instagram.com/syed.samad.ali/" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"><FontAwesomeIcon icon={faInstagram}/></a></div>
                    <div className="social-card-icons"> <a href="mailto:samadali1697@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"><FontAwesomeIcon icon={faEnvelope}/></a></div>
                    <div className="social-card-icons"> <a href="https://www.facebook.com/SyedSamadAliShah" rel="opener noreferrer" target="_blank" className="fa fas fa-facebook fa-lg"><FontAwesomeIcon icon={faFacebook}/></a></div>
                </div>
            </div>


        </div>
    );
}
