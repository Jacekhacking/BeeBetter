import React from "react";
import styles from "./HoneycombTest.module.css"
import hexAboutMePic from "../UI/assets/hexAboutMe.jpg";
import hexSchedulePic from "../UI/assets/hexSchedule.jpg";
import hexContactPic from "../UI/assets/hexContact.jpg";
import hexFaqPic from "../UI/assets/hexFAQ.jpg";
import hexMySpace from "../UI/assets/hexMySpace.jpg";
import hexDailyExercise from "../UI/assets/hexDailyExercises.jpg";
import hexSocials from "../UI/assets/hexSocials.jpg";

const HoneycombTest = (props) => {
    return(
        <div className={`${styles["honeycomb-container2"]}`}>
            <div className={`${styles["honeycomb2"]}`}>

                <a href="#AboutMe" onClick={() => {props.handlePageChange('About Me')}} className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`} src={hexAboutMePic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}>About-Me</div>
                </a>



                <a href="#Services" onClick={ () => props.handlePageChange('Services')}  className={`${styles["honeycomb-cell2"]}`}> <img className={`${styles["honeycomb-cell-img2"]}`} src={hexSchedulePic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}><small>Services & Modalities</small></div> </a>


                <a href="#Contact"
                   onClick={()=> {props.handlePageChange('Contact')}} className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`}
                         src={hexContactPic}
                         alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}>
                        Contact me</div>
                </a>

                <a href='#Unfinished' onClick={()=> {props.handlePageChange('Unfinished')}} className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`} src={hexFaqPic} alt="sunflower pic"/>
                    <div  className={`${styles["honeycomb-cell-title2"]}`}><small>reviews & faq</small></div>
                </a>

                <a href="#Unfinished" onClick={()=> {props.handlePageChange('Unfinished')}}  className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`} src={hexMySpace} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}><small>Take a tour</small></div>
                </a>
                <a href="#Unfinished" onClick={()=> {props.handlePageChange('Unfinished')}}  className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`} src={hexDailyExercise} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}>Daily<small>Exercises</small></div>
                </a>

                <a href="#Unfinished" onClick={()=> {props.handlePageChange('Unfinished')}}  className={`${styles["honeycomb-cell2"]}`}>
                    <img className={`${styles["honeycomb-cell-img2"]}`} src={hexSocials} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title2"]}`}>Blog</div>
                </a>

                <li className={`${styles["honeycomb-cell2"]}  ${styles["honeycomb-hidden2"]}`}>
                </li>
            </div>
        </div>

    )
}

export default HoneycombTest;