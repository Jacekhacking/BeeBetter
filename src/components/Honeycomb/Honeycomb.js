import React from 'react';
import hexAboutMePic from "../UI/assets/hexAboutMe.jpg";
import hexSchedulePic from "../UI/assets/hexSchedule.jpg";
import hexContactPic from "../UI/assets/hexContact.jpg";
import hexFaqPic from "../UI/assets/hexFAQ.jpg";
import hexMySpace from "../UI/assets/hexMySpace.jpg";
import hexDailyExercise from "../UI/assets/hexDailyExercises.jpg";
import hexSocials from "../UI/assets/hexSocials.jpg";
import styles from './Honeycomb.module.css'


const Honeycomb = (props) => {

    return (


        <div className={`${styles["honeycomb-container"]}`}>
            <div className={`${styles["honeycomb"]}`}>

                <a href="#AboutMe" onClick={() => {props.handlePageChange('About Me')}} className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexAboutMePic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>About-Me</div>
                </a>



                <a href="#Services" onClick={ () => props.handlePageChange('Services')}  className={`${styles["honeycomb-cell"]}`}> <img className={`${styles["honeycomb-cell-img"]}`} src={hexSchedulePic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}><small>Services & Modalities</small></div> </a>


                <a href="#Contact"
                   onClick={()=> {props.handlePageChange('Contact')}} className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`}
                         src={hexContactPic}
                         alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>
                        Contact me</div>
                </a>
                <a href="#Tour" onClick={()=> {props.handlePageChange('Tour')}}  className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexMySpace} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}><small>Take a tour</small></div>
                </a>

                <a href='#Reviews' onClick={()=> {props.handlePageChange('Reviews')}} className={`${styles["honeycomb-cell"]}`}>
                   <img className={`${styles["honeycomb-cell-img"]}`} src={hexFaqPic} alt="sunflower pic"/>
                   <div  className={`${styles["honeycomb-cell-title"]}`}><small>reviews & faq</small></div>
               </a>

                <a href="#Unfinished" onClick={()=> {props.handlePageChange('Unfinished')}}  className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexDailyExercise} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Daily<small>Exercises</small></div>
                </a>

                <a href="#Unfinished" onClick={()=> {props.handlePageChange('Unfinished')}}  className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexSocials} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Blog</div>
                </a>

                <li className={`${styles["honeycomb-cell"]}  ${styles["honeycomb-hidden"]}`}>
                </li>
            </div>
        </div>

    )
}

export default Honeycomb;