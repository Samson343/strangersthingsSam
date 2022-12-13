import styles from './LoginForm.module.css'

import React from "react"



const LoginForm = () => {


    return (
        
        <form className={styles.loginForm}>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>UserName</label>
                <input type="text" placeholder='Username' className= {styles.input}></input>
            </div>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>Password</label>
                <input type="text" placeholder = "Password" className= {styles.input}></input>
            </div>
            <button className={styles.submitButton}>Submit</button>
        </form>
    
    )
}

export default LoginForm