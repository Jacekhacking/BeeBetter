import React, { Fragment} from 'react';

import './Navigation.module.css'
import styles from "./Navigation.module.css"
import Logo from "../UI/assets/Logo.png"
// import BookingButton from "../UI/Buttons/BookingButton.js";
const Navigation = (props) => {






    return (
        <Fragment>
            <nav className={`${styles.primaryHeader} flex ff-serif-bold`}>
                <img
                    onClick={() => props.handlePageChange('')} className={styles['logo']} src={Logo} alt="logo"/>



                <div className={`flex`} style={{justifyContent:'center'}}>
                    <a href="https://www.vagaro.com/beebettermassage"
                       target={'_blank'}
                       rel={"noopener noreferrer"}><h2
                        className={`${styles.bookingLink} fs-500`}
                        style={{textAlign: 'center'}}>Book A Session</h2></a>
                </div>


            </nav>
        </Fragment>
    )
}
export default Navigation;






