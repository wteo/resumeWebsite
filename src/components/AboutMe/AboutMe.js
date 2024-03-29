import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';

import styles from './AboutMe.module.css';
import profilePicture from '../../images/profile2.jpg';

import resumeFile from '../../files/resume.pdf';

function AboutMe() {
    return (
        <section className={styles.aboutMeOuterContainer} id='about'>
            <NavTitleStyle navColor='main'>
                About Me
            </NavTitleStyle>
            <div className={styles.aboutMeInnerContainer}>
                <div className={styles.aboutMeSummary} data-aos='fade-right' data-aos-once='true'>
                    <p className={styles.aboutMeSubTitle}>Self-Taught Developer</p>
                    <p>I have been teaching myself how to code since May 2021.</p>
                    <p>After 10 years in Finance, I decided to pursue my interest in web development.</p>
                    <br/>
                    <p className={styles.aboutMeSubTitle}>General</p>
                    <p>I was born in Malaysia. Hence, I can speak 4 different languages: English (my most used language), Malay, Mandarin and Hokkien.</p>
                    <p>For leisure, I enjoy cycling and reading books.</p>
                    <a href={resumeFile} target='_blank' rel='noreferrer'>
                        <button id={styles.resume}>Download resume</button>
                    </a>
                </div>
                <div className={styles.aboutMeImageContainer} data-aos='flip-left' data-aos-once='true'>
                    <img className={styles.profileImage} src={profilePicture} alt='myself'/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;