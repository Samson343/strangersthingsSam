import React from "react";
import styles from "./RegisterForm.module.css"
import { register } from "./apiIndex";
import { useState } from "react";
import { Redirect } from "react-router";


const RegisterForm = ({ renderCondition, setRenderCondition }) => {
    
    const [registration, setRegistration] = useState ({}) 
    const [userName, setUserName] = useState ('')
    const [password, setPassword] = useState ('')
    const [confPassword, setConfPassword] = useState ('')
    const [errMessage, setErrMessage] = useState ('')
    const [isRegistered, setIsRegistered] = useState (false)
    




        return (
            <>
            {isRegistered && 
                        <Redirect to = "/login" />     
            }
            <form className={styles.loginForm} onSubmit = { (e) => {
                e.preventDefault()

                //if passwords match, attempt to register user and display error/success messages at the bottom of the form
                password === confPassword ?
                    
                register(userName, password)
                    .then(data => {
                        if (data.success) {
                            setRegistration(data)
                            setErrMessage("Login and watch your junk turn into $$$.")
                            setRenderCondition(true)
                            setTimeout( () => {setIsRegistered(true)}, 3500)
                        }
                        else if (!data.success) {setErrMessage(data.error.message)}
                    })
                    .catch(error => setErrMessage(error))

                : setErrMessage("Unsuccessful: Password and confirm password are not identicle.")
                
            }
            }>
                  { renderCondition &&
                    <h3 className= {styles.regMessage}>You're all set!</h3> 
                  }
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Display Name</label>
                    <input minLength = "5" type="text" placeholder='Display Name' className= {styles.input} required
                        name="displayname"
                        value = {userName}
                        onChange = {event => {
                            setUserName(event.target.value)
                        }}
                    ></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Password</label>
                    <input minLength = "5" type="password" placeholder = "Password" className= {styles.input} required
                        name = "password"
                        value = {password}
                        onChange = {event => {
                            setPassword(event.target.value)
                        }}
                    ></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Confirm Password</label>
                    <input minLength = "5" type="password" placeholder = "Password" className= {styles.input} required
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
            </>
        
        )
    }
    
    export default RegisterForm

    

    