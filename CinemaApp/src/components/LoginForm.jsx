import React from 'react'

import styles from "./login.module.scss"

import {
    GoogleOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';



const LoginForm = () => {
    return (
        <div className={styles.loginform}>
            <form className={styles.form}>
                <h2>Log In</h2>

                <div className={styles.email}>
                    <label>Your E-mail</label>
                    <input></input>
                </div>
                <div className={styles.password}>
                    <label>Your Password</label>
                    <input></input>
                </div>
                <div className={styles.alerts}>
                    <input type='checkbox' />
                    <label>Remember Me</label>
                    <button>Forgot Your Password?</button>
                </div>
                <div className={styles.loginbtn}>
                    <button>Log In</button>
                </div>
                <div className={styles.registerbtn}>
                    <label>Not a member?</label>
                    <button>Register</button>
                </div>
                <h3>Or Login with</h3> 
                <div className={styles.loginwith}>
                    
                    <div>
                        <GoogleOutlined className={styles.google} />
                    </div>
                    <div>
                        <GithubOutlined className={styles.github} />
                    </div>
                    <div>
                        <LinkedinOutlined className={styles.linkedin} />
                    </div>
                </div>
                <div className={styles.footer}>
                    @2023 all rights reserved
                </div>
            </form>
        </div>
    );


}

export default LoginForm;