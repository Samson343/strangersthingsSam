import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { login } from './apiIndex'
import '@fontsource/roboto/300.css';
import TextField from '@mui/material/Button';
import { Redirect } from "react-router";
import React from "react"
import zIndex from '@mui/material/styles/zIndex';



const LoginForm = ({ renderCondition, setRenderCondition, setToken, setIsAuthorized, token, setUserName, showAlert, setShowAlert }) => {

    const [loginPass, setLoginPass] = useState('')
    const [loginName, setLoginName] = useState('')
    const [botMessage, setBotMessage] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [loginData, setLoginData] = useState({success:false, error: {message: ""}, data: {token: ""}}) 

    //ensures the error message at the bottom of the form appears, including the first failed login attempt
    useEffect(() => {
        if (loginData.error !== null) {
            setBotMessage(loginData.error.message)
            setTimeout(() => setBotMessage(''), 3900)
        }
        console.log("this is logindata", loginData)
    }, [loginData])

    // useEffect (() => {
    //     if (loginData.data.token !== "" ) {
    //     setToken(loginData.data.token)
    //     }
    // }, [setToken, loginData])


    // useEffect (() => 
    //     console.log(loginData), 
    //         [loginData])

    return (

        <form className={styles.loginForm} onSubmit={async (e) => {
            e.preventDefault()
            try {
                await login(loginPass, loginName)
                    .then(async data => {
                        console.log(data)
                        setLoginData(data)
                        
                        if (data.data !== null) {
                            setToken(data.data.token)}
                        if (data.success) { 
                            setRenderCondition(false); 
                            setIsAuthorized(true)
                        }
                    }
                )
            }
            catch (error) {
                console.log(error)
            }
                
        }
        }>
            {renderCondition &&
                <h4 className={styles.pleaseLogin}>Please log in with your newly created credentials</h4>
            }

            <div className={styles.inputs}>
                <label className={styles.loginLabels}>Username</label>
                <input minLength="3" type="text" placeholder='Username' className={styles.input} required
                    value={loginName}
                    onChange={event =>
                        setLoginName(event.target.value)
                    }

                ></input>

            </div>
            <div className={styles.inputs}>
                <label className={styles.loginLabels}>Password</label>
                <input minLength="3" type="password" placeholder="Password" className={styles.input} required
                    value={loginPass}
                    onChange={event =>
                        setLoginPass(event.target.value)
                    }

                ></input>
            </div>
            <button className={styles.submitButton}>Log in</button>
            {
                botMessage &&
                <p className = { styles.error } >{botMessage}</p>
            }
        
            { !renderCondition &&
                <Link to='/register'>
                    <p className= {styles.noAccount} title="No worries! Click here and we'll get you set up in just one step.">don't have an account?</p>
                </Link>
            }

            {   loginData.success &&
                <>
                 <Redirect to = "/" />
                 {setUserName(loginName)}
                </>
                 
            }

            {
                showAlert &&
                <>
                {setShowAlert(false)}
                {setTimeout(() => alert('please log in to continue'), 300)}
                </>
            }
            
        </form>
    
    )
}

export default LoginForm

