import React from "react";
import styles from "./Contact.module.css"

const Contact = () => {
    return(
        <div id = "Contact" className={`${styles['contact-container']}`}>
            <h2 className={styles['contact-header']}>Contact Me here!</h2>
            <div className={`${ styles['contact-container-item'] }`}>
                Email: <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
            </div>

            <div className={`${ styles['contact-container-item'] }`}>
                Phone: 385-313-0591 <span className={'fs-300'} style={{color: 'hsl(var(--clr-dark),.8)'}}>(Text preferred)</span>
            </div>
            <div className={`${ styles['contact-container-item'] }`}>
                <a href="https://www.instagram.com/bee.better.massage"> My Instagram </a>
            </div>
        </div>
    )
}

export default Contact