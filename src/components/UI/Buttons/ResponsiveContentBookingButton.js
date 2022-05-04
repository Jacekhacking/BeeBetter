import React from "react";
import styles from "./BookingButton.module.css";


const ResponsiveContentBookingButton = () => {
    return(
        <div className={`flex`} style={{justifyContent:'center'}}>
            <a href="https://www.vagaro.com/beebettermassage" target={'_blank'} rel={"noopener noreferrer"}><h2 className={`${styles['responsive-booking-button']} fs-500`} style={{textAlign: 'center'}}>Book A Session</h2></a>
        </div>
    )
}

export default ResponsiveContentBookingButton