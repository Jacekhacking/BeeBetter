import React, {Fragment} from 'react';

//import {Link} from "react-router-dom";
import './Navigation.module.css'
import styles from "./Navigation.module.css"
import Logo from "../UI/assets/Logo.png"


const Navigation = (props) => {


    const tabs = ['About Me', 'Services', 'Contact']

    return (
        <Fragment>
            <nav className={`${styles.primaryHeader} flex ff-serif-bold`}>
                <img className={styles['logo']} src={Logo} alt="logo"/>
                <ul className={`${styles.primaryNavigation} + flex`}>
                    {tabs.map(tab => (
                        <a
                            href={'#' + tab.toLowerCase()}
                           onClick={() => props.handlePageChange(tab)}
                           className={styles.navItem}>
                            {tab}
                        </a>
                    ))}
                    {/*<a href="#" className={styles.navItem}>Testing</a>*/}
                </ul>
            </nav>
        </Fragment>
    )
}
export default Navigation;






