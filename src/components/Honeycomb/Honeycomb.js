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
            <ul className={`${styles["honeycomb"]}`}>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexAboutMePic} alt="sunflower pic"/>
                    <div onClick={ () => props.handlePageChange()} className={`${styles["honeycomb-cell-title"]}`}>About-Me</div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexSchedulePic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Services</div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexContactPic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Contact me</div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexFaqPic} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>FAQ<small>test</small></div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexMySpace} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>My Space<small></small></div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexDailyExercise} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Daily<small>Exercises</small></div>
                </li>
                <li className={`${styles["honeycomb-cell"]}`}>
                    <img className={`${styles["honeycomb-cell-img"]}`} src={hexSocials} alt="sunflower pic"/>
                    <div className={`${styles["honeycomb-cell-title"]}`}>Socials<small>test</small></div>
                </li>

                <li className={`${styles["honeycomb-cell"]}  ${styles["honeycomb-hidden"]}`}>
                </li>

            </ul>
        </div>
    )
}

export default Honeycomb;