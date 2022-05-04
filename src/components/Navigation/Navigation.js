import React, {Fragment} from 'react';

import './Navigation.module.css'
import styles from "./Navigation.module.css"
import Logo from "../UI/assets/Logo.png"
import BookingButton from "../UI/Button/BookingButton.js";

const Navigation = (props) => {



    return (
        <Fragment>
            <nav className={`${styles.primaryHeader} flex ff-serif-bold`}>
                <img onClick={() => props.handlePageChange('')}  className={styles['logo']} src={Logo} alt="logo"/>

                <BookingButton />
            </nav>
        </Fragment>
    )
}
export default Navigation;






