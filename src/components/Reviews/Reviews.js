import React from "react";
import styles from "./Reviews.module.css"

const Reviews = () => {
    return (
        <div id={"Reviews"} className={styles['reviews-container']}>
            <div className={styles['review-item']}>
                <h2>Name <span className={'fs-200'}>00/00/0000</span></h2>
                <p className={styles['review-text']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem dolor inventore iste iusto
                    laboriosam magni porro, quaerat saepe ut. Blanditiis esse excepturi illo inventore laudantium,
                    minima reiciendis sapiente sunt.</p>
            </div>
            <div>
                test
            </div>
        </div>
    )
}

export default Reviews;