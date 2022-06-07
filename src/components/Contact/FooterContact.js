import React, {Fragment} from 'react';

import styles from './FooterContact.module.css';
import instagram from "../UI/assets/instagram.png"

function FooterContact() {

    return (
        <Fragment>
            <div className={`${styles['footer-top']}  text-light`}
                   >

                    <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
                    <p> 385-313-0591 <span className={'fs-200'} style={{color: 'hsl(var(--clr-light),.7)'}}>(Text preferred)</span></p>



            </div>

            <div className={` ${styles['footer-bottom']} fs-300  text-light flex `} style={{justifyContent:'space-between', background:'black'}}>

                <p  >BeeBetter <span className={' fs-200 text-blue'}>| LMT private practice |</span></p>
                <div className={'flex'} >
                    <p >Socials</p>
                    <a href="https://www.instagram.com/bee.better.massage"><img className={styles['social-logo']} src={instagram} alt="instagram"/>  </a>
                </div>

            </div>
        </Fragment>
    )
}

export default FooterContact;