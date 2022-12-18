import React, { useEffect } from "react";
import styles from './Featured.module.css'
import { useState } from "react";


const Featured = ({ clickedPost, setShouldFeature }) => {
    const [delivery, setDelivery] = useState("")

    useEffect ( () => {
    setDelivery(clickedPost.willDeliver ?
        "Yes" : "No, pickup only")
    }, [])
    
    if (clickedPost.updatedAt) {

    }

    return (
        <main className = {styles.main}>
            <div className={styles.postCard} onClick={(e) => {

            }
            }>
                <h5 className={styles.title}>{clickedPost.title[0].toUpperCase() + clickedPost.title.slice(1)}</h5>
                <p className={styles.description}>{clickedPost.description}</p>
                <p className={styles.price}>Price: {clickedPost.price}</p>
                <p > <span className= {styles.spans}>Location: &nbsp; </span>{clickedPost.location.split("[").join('').split(']').join('')}</p>
                <p><span className= {styles.spans}>Willing to deliver: &nbsp;</span> {delivery}</p>
                <p><span className= {styles.spans}> Date Created: &nbsp;</span> {clickedPost.updatedAt
                    .split('')
                    .slice(5, 10)
                    .join('') 
                    + "-" 
                    + clickedPost.updatedAt.split("")
                    .slice(0, 4)
                    .join('')
                  }
                </p>
                <p className={styles.seller}><span className= {styles.spans}> Seller: &nbsp;</span> {clickedPost.author.username}</p>
                
            
                <button className= {styles.backButton} onClick = {() => {
                        setShouldFeature (false)
                   }
                }
                > Homepage</button>
                <button className= {styles.messageButton}>Message Seller</button>
            </div>
        </main>
    )
}

export default Featured