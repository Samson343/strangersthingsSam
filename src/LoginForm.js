import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { login } from './apiIndex'

import React from "react"



const LoginForm = () => {

        const [loginPass, setLoginPass] = useState('')
        const [loginName, setLoginName] = useState('')

    return (
        
        <form className={styles.loginForm} onSubmit = { (e) => {
            e.preventDefault()
            login (loginPass, loginName)
                .then(data => console.log(data))
            console.log("form submitted")
            
        }
        }>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>User Name</label>
                <input minlength = "3" type="text" placeholder='Username' className= {styles.input} required
                    value = {loginName}
                    onChange = {event =>
                        setLoginName(event.target.value)
                    }
                
                ></input>
            </div>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>Password</label>
                <input minlength = "3" type="password" placeholder = "Password" className= {styles.input} required
                     value = {loginPass}
                     onChange = {event =>
                         setLoginPass(event.target.value)
                     }
                
                ></input>
            </div>
            <button className={styles.submitButton}>Submit</button>
            <Link to = '/register'>
            <p title = "No worries! Click here and we'll get you set up in just one step.">don't have an account?</p>
            </Link>
        </form>
    
    )
}

export default LoginForm

