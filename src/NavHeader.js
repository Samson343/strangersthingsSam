import React from 'react'
import styles from './NavHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMessage, fa2 } from '@fortawesome/free-solid-svg-icons'




export default function NavHeader () {
    return (
        <>
            
            <header className= {styles.navHeader}>
                <span className={styles.spaceHolder}></span>

                <span className={styles.navHeading}>Stranger's Things</span>

                <span>

                    <span className={styles.menuContainers}>
                        <FontAwesomeIcon icon={faBars} />
                        <FontAwesomeIcon icon={faMessage} />
                        <FontAwesomeIcon icon={faAddressCard} />
                    </span>

                </span>

            </header>
        </>
        )
}