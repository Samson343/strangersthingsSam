import React from "react"
import styles from './StaticHeader.module.css'


export const StaticHeader = () => {
    return (
        <header className= {styles.header}>
            <span className={styles.heading}>Stranger's Things</span>
        </header>
    )
}