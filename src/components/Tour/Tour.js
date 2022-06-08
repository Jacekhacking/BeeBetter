import React, {Fragment} from "react";
import styles from "./Tour.module.css";
import TourCarousel from "./TourCarousel"






const Tour = () => {
    return (
        <Fragment>

            <h2
                id={`Tour`}
                className={`${styles['tour-header']} text-dark ff-serif-bold fs-700`}
            >Tour My Space </h2>

            <TourCarousel/>

        </Fragment>
    )
}

export default Tour;
