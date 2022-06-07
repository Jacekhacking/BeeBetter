import React, {Fragment} from "react";
import styles from "./Tour.module.css";
import tour_pic_1 from "../UI/assets/tour pictures/4C003FCB-9DA5-4F2C-8CFC-CD0F5338F04C.JPG"
import tour_pic_2 from "../UI/assets/tour pictures/889F924C-7399-429D-8EF9-06639E0F3714.JPG"
import tour_pic_3 from "../UI/assets/tour pictures/IMG_3306.jpg"
import tour_pic_4 from"../UI/assets/tour pictures/IMG_3307.jpg"

const Tour = () => {
    return (
        <Fragment>

            <h2 id={`Tour`} className={`${styles['tour-header']} text-dark ff-serif-bold fs-700`} >Tour My Space </h2>
        <div className={styles['tour-container']}>
            <img className={styles['tour-img']} src={tour_pic_1}   alt=""/>
            <img className={styles['tour-img']} src={tour_pic_2}   alt=""/>
            <img className={styles['tour-img']} src={tour_pic_3}   alt=""/>
            <img className={styles['tour-img']} src={tour_pic_4}   alt=""/>
        </div>
        </Fragment>
    )
}

export default Tour;
