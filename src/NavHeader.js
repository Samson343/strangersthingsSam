import React from 'react'
import styles from './NavHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasolid, faUserCheck } from '@fortawesome/free-solid-svg-icons'




export default function NavHeader () {
    return (
        <>
            <head>
            <script src="https://kit.fontawesome.com/dcad18d1cb.js" crossorigin="anonymous"></script>
            </head>
            <header className= {styles.navHeader}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <span className={styles.navHeading}>Stranger's Things</span>

                <span>
                <i class="fa fa-home"></i>
                {/* <i class="fa fa-search"></i>
                <i class='fas fa-blind' ></i> */}
                <FontAwesomeIcon icon={faUserCheck} />
                
                </span>

            </header>
        </>
        )
}