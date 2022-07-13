import React, {Fragment} from 'react';
import styles from "./About.module.css"
import Portrait from "../UI/assets/portrait-pic.jpg"

function About (props) {

    if(props.currentPage === 'About Me'){
        console.log('about me props drill working')
    }

    return (
        <>
        <h2 id={`AboutMe`} className={`${styles.aboutHeader} text-dark ff-serif-bold fs-700`} >A Little Bit About Me </h2>
        <p className={`${styles.aboutBody}` }> <img className={styles.aboutImage} src={Portrait} alt="Portrait"/>Bee Better Massage is owned & operated by me, Alora! I am committed to helping you "bee" the best version of yourself. I have been working in the Health & Wellness for the past 7 years. I specialize in program design for the individual to address mobility, mitigate pain, and improve overall well-being. I utilize massage, stretching, and mobility techniques to improve your quality of movement. My goal is to help my clients "fix their bodies" by manually releasing muscle tension, improving joint function, strengthening to address posture & balance, and educating for lifelong improvements.  My clients will become familiar with the joint & muscle structures within their own body as we massage, stretch, strengthen, and train. All of this will create an opportunity for the body to heal & for the client to be in control.

            My education and experience entails a Bachelor's Degree in Exercise Physiology from SUU, LMT (Licensed Massage Therapist) CSCS (Certified Strength and Conditioning Specialist).  I am concurrently continuing my education for FRC (Functional Range Conditioning) and Lymphatic Drainage.  My rental space is a part of the Yugen Wellness Center in Millcreek, UT.  Check out my website or contact me for more details and/or to book an appointment.
        </p>

        </>
    )
}


export default About;




