import React, {Fragment} from 'react';

//import {Link} from "react-router-dom";
import './Navigation.module.css'
import styles from "./Navigation.module.css"


const Navigation = (props) => {


    const tabs = ['About Me', 'Services', 'Contact']

    return (
        <Fragment>
            <nav className={`${styles.primaryHeader} flex ff-serif-bold`}>
                <h1 className={styles.logo}><strong>Bee Better Massage</strong></h1>
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






