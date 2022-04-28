import React, {Fragment} from 'react';

import styles from './FooterContact.module.css';

function FooterContact () {
    return (
        <Fragment>
            <footer className={`${styles.footer} `} style={{justifyContent:'center'}}>
                <h2 style = {{justifyContent: 'center'}}>Contact Info</h2>
                <ul className={``}>
                    <li>
                        Email: <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
                    </li>
                    <li>
                        Phone: 385-313-0591
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bee.better.massage">Instagram </a>
                    </li>
                </ul>

            </footer>



        </Fragment>
    )
}
export default FooterContact;