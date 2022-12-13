import React from "react"
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
                {/* <span>Stick a fork in on me on</span> */}
            <a href = "https://github.com/Samson343/strangersthingsSam" target={'_blank'} rel= 'noreferrer'>
                <img className = {styles.github} src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt ="GitHub"> 
                </img>
            </a>
        </footer>
    )
}

export default Footer