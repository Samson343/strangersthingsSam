import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'

import React from "react"



const LoginForm = () => {


    return (
        
        <form className={styles.loginForm} onSubmit = { (e) => {
            e.preventDefault()
            
        }
        }>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>User Name</label>
                <input type="text" placeholder='Username' className= {styles.input}></input>
            </div>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>Password</label>
                <input type="text" placeholder = "Password" className= {styles.input}></input>
            </div>
            <Link to = '/main'>
            <button className={styles.submitButton}>Submit</button>
            </Link>
            <p title = "No worries! Enter your prefered username and password above and we'll create one for you.">don't have an account?</p>
        </form>
    
    )
}

export default LoginForm