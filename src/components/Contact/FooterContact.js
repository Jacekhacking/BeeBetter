import React, {Fragment} from 'react';

import styles from './FooterContact.module.css';
import instagram from "../UI/assets/instagram.png"

function FooterContact() {

    return (
        <Fragment>
            <div className={`${styles['footer']} flex wrap text-dark`}>

                    <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
                    <p> 385-313-0591 <span className={'fs-100'} style={{color: 'hsl(var(--clr-dark),.7)'}}>(Text)</span></p>
                    <p  >BeeBetter <span className={' fs-100 '} style={{color:'hsl(var(--clr-dark),.7)'}}>| LMT private practice |</span></p>
                    <div className={'flex'} >
                    <p >Socials</p>
                    <a href="https://www.instagram.com/bee.better.massage"><img className={styles['social-logo']} src={instagram} alt="instagram"/>  </a>
                </div>

            </div>

        </Fragment>
    )
}

export default FooterContact;