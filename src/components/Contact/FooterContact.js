import React, {Fragment} from 'react';

import styles from './FooterContact.module.css';

function FooterContact(props) {




//     const visibilityFunction = () => {
//         let hide = false
//         if (props.currentPage === 'Contact' ){
//              hide = true
//         }
//         return hide;
//     }
    let test = JSON.stringify(props.currentPage)
const hiddenOrNot = () => {
        let visibility = ''
    if(test === 'Contact'){
        visibility = 'hide'
    }
    visibility = 'footer'
    return visibility;
}
hiddenOrNot(test)

    return (
        <Fragment>
            <footer className={`${styles.footer}`}
                    style={{justifyContent: 'center'}}>


                <div className={`fs-300`}>
                    Email: <a href="mailto:alora@beebettermassage.com">alora@beebettermassage.com</a>
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