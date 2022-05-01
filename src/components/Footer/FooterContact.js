import React, {Fragment} from 'react';

import styles from './FooterContact.module.css';

function FooterContact () {
    return (
        <Fragment>
            <footer className={`${styles.footer} `} style={{justifyContent:'center'}}>

                    <div>
                        <p className={`fs-300`}>
                            Email: <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
                        </p>

                    </div>

                    <div className={`fs-300`}>
                        Phone: 385-313-0591
                    </div>
                    <div className={`fs-300`}>
                        <a href="https://www.instagram.com/bee.better.massage">Instagram </a>
                    </div>


            </footer>
        </Fragment>
    )
}
export default FooterContact;