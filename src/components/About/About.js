import React, {Fragment} from 'react';
import styles from "./About.module.css"
import Portrait from "../UI/assets/portrait-pic.jpg"

function About (props) {

    if(props.currentPage === 'About Me'){
        console.log('about me props drill working')
    }

    return (
        <Fragment>
        <h2 className={`${styles.aboutHeader} text-dark ff-serif-bold fs-700`} >A Little Bit About Me </h2>
        <p className={`${styles.aboutBody} fs-600` }> <img className={styles.aboutImage} src={Portrait} alt="Portrait"/>Bee Better Massage is owned & operated by me, Alora! - Bachelor's Degree in Exercise Physiology- LMT (Licensed Massage Therapist)- CSCS (Certified Strength and Conditioning Specialist)- EMT (Emergency Medical Tech) - Concurrent continuing education for FRC (Functional Range Conditioning) My massage practice is focused on helping you "bee" a better version of yourself! In all reality, my goal is to help my clients fix their bodies by manually releasing muscle tension, improving joint function, strengthening to address posture & balance, and educating for lifelong improvements. My clients will become familiar with the joint & muscle structures within their own body as we massage, stretch, strengthen, and train. All of this will create an opportunity for the body to heal & for the client to be in control. My rental space is a part of the Yugen Wellness Center in Millcreek, UT.</p>

        </Fragment>
    )
}


export default About;




