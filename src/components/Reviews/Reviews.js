import React from "react";
import styles from "./Reviews.module.css"
import {reviewsData} from "../UI/Data";


const Reviews = () => {


    return (
        <div className={'flex'} style={{justifyContent:'center', alignItems:'center'}}>
            <div id={"Reviews"} className={styles['reviews-container']}>
                {reviewsData.map(review => (
                    <div className={styles['review-item']}>
                        <div className={styles['review-header']}>
                            <div>
                                <h2 className={'fs-400'}>{review.Name} <span className={'fs-200'}>{review.Date}</span></h2>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className={styles['review-text']}>{review.Review}</div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default Reviews;