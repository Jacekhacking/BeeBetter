import React, {Fragment} from 'react';
import styles from './AdminLogin.module.css'


function AdminLogin() {
    return (
        <Fragment>
            <div className={`${styles['admin-login-body']} `}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" name="username" required/>

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="Password" name="password"/>
                </div>
                <button>Login</button>
            </div>
        </Fragment>

    )
}

export default AdminLogin;









