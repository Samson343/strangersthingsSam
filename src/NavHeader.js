import React from 'react'
import styles from './NavHeader.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMessage} from '@fortawesome/free-solid-svg-icons'




export default function NavHeader () {
    return (
        <>
            
            <header className= {styles.navHeader}>
                <span className={styles.spaceHolder}></span>

                <span className={styles.navHeading}>Stranger's Things</span>

                <span>

                    <span className={styles.menuContainers}>
                        <Link to="/main" className={styles.link}>
                            <FontAwesomeIcon icon={faBars} />
                        </Link>
                        <Link className={styles.link} to = '/profile'>
                            <FontAwesomeIcon icon={faMessage} />
                        </Link>
                        <Link className={styles.link} to="/createPost">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </Link>
                    </span>

                </span>

            </header>
        </>
        )
}