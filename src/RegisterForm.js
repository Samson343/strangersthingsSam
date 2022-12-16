import React from "react";
import styles from "./RegisterForm.module.css"
import { register } from "./apiIndex";
import { useState } from "react";


const RegisterForm = ({ setToken, isAuthorized, setIsAuthorized, }) => {
    
    const [registration, setRegistration] = useState ({}) 
    const [userName, setUserName] = useState ('')
    const [password, setPassword] = useState ('')
    const [confPassword, setConfPassword] = useState ('')
    const [errMessage, setErrMessage] = useState ('')




        return (
            
            <form className={styles.loginForm} onSubmit = { (e) => {
                e.preventDefault()

                //if passwords match, attempt to register user and display error/success messages at the bottom of the form
                password === confPassword ?
                    
                register(userName, password)
                    .then(data => {
                        if (data.success) {
                            setRegistration(data)
                            setErrMessage("Success! Login and watch your junk turn into $$$.")
                        }
                        else if (!data.success) {setErrMessage(data.error.message)}
                    })
                    .catch(error => setErrMessage(error))

                : setErrMessage("Unsuccessful: Password and confirm password are not identicle.")
                
            }
            }>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Display Name</label>
                    <input minlength = "5" type="text" placeholder='Display Name' className= {styles.input} required
                        name="displayname"
                        value = {userName}
                        onChange = {event => {
                            setUserName(event.target.value)
                        }}
                    ></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Password</label>
                    <input minlength = "5" type="password" placeholder = "Password" className= {styles.input} required
                        name = "password"
                        value = {password}
                        onChange = {event => {
                            setPassword(event.target.value)
                        }}
                    ></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Confirm Password</label>
                    <input minlength = "5" type="password" placeholder = "Password" className= {styles.input} required
                    name="confPassword"
                    value={confPassword}
                    onChange={ event =>
                        setConfPassword(event.target.value)
                    }
                    
                    ></input>
                </div>
                
                <button className={styles.submitButton}>Create Account</button>


                {    errMessage &&
                    <div className = {styles.botMessage}>
                        {errMessage}
                    </div>
                }
                
            </form>
        
        )
    }
    
    export default RegisterForm

    

    