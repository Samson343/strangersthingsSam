import React from "react";
import styles from "./LoginForm.module.css"
import { register } from "./apiIndex";


const RegisterForm = () => {


        return (
            
            <form className={styles.loginForm} onSubmit = { (e) => {
                e.preventDefault()
                //register()
                
            }
            }>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Display Name</label>
                    <input type="text" placeholder='Display Name' className= {styles.input}></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Password</label>
                    <input type="text" placeholder = "Password" className= {styles.input}></input>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.loginLabels}>Confirm Password</label>
                    <input type="text" placeholder = "Password" className= {styles.input}></input>
                </div>
                
                <button className={styles.submitButton}>Create Account</button>
                
            </form>
        
        )
    }
    
    export default RegisterForm