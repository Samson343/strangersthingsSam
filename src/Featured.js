import React from "react";
import styles from './Featured.module.css'


const Featured = ({ clickedPost, setShouldFeature }) => {
    return (
        <main className = {styles.main}>
            <div className={styles.postCard} onClick={(e) => {

            }
            }>
                <h5 className={styles.title}>{clickedPost.title[0].toUpperCase() + clickedPost.title.slice(1)}</h5>
                <p className={styles.description}>{clickedPost.description}</p>
                <p className={styles.price}>Price: {clickedPost.price}</p>
                <p className={styles.seller}>Seller: {clickedPost.author.username}</p>

                <button className= {styles.backButton} onClick = {() => {
                        setShouldFeature (false)
                        
                   }
                }
                
                >back</button>
            </div>
        </main>
    )
}

export default Featured