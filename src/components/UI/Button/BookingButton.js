import React from "react";
import styles from "./BookingButton.module.css"

const BookingButton = () => {
    return(
            <div className={`flex`} style={{justifyContent:'center'}}>
                     <a href="https://www.vagaro.com/beebettermassage"><h2 className={`${styles.bookingLink} fs-500`} style={{textAlign: 'center'}}>Book A Session</h2></a>
                 </div>

    )
}

export default BookingButton;