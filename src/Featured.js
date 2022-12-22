import React, { useEffect } from "react";
import styles from './Featured.module.css'
import { useState } from "react";
import { deletePost, sendMessage } from "./apiIndex";



const Featured = ({ clickedPost, setShouldFeature, token, id }) => {
    const [delivery, setDelivery] = useState("")
    const [isMessageBox, setIsMessageBox] = useState(false)
    const [postMessage, setPostMessage] = useState ('')
    const [isSendButton, setIsSendButton] = useState (false)

    useEffect(() => {
        setDelivery(clickedPost.willDeliver ?
            "Yes" : "No, pickup only")
    }, [])

    // if (clickedPost.updatedAt) {

    // }

    

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
                
                {
                    clickedPost.isAuthor &&
                    <button className= {styles.deleteButton} onClick = { async () => {
                           await deletePost(id, token)
                              .then(() => {
                                setTimeout(setShouldFeature(false), 1000)
                                
                                })
                              .catch(console.error)
                        
                        }
                    }
                    
                    >Delete</button>
                }

                {
                    isMessageBox && 
                    <input className = {styles.messageBox}type = "text" name = "message" value = {postMessage} onChange = {(e) => {
                        setPostMessage(e.target.value)
                    
                    }}></input>
                }

                <div className= {styles.buttonWrapper}>
                <button className= {styles.submitButton} onClick = {() => {
                    setShouldFeature (false)
                   }
                }
                > Back</button>

                    {!isSendButton ?

                        <button className={styles.submitButton} onClick={() => {
                            setIsMessageBox(true)
                            setIsSendButton(true)

                            // postMessage(clickedPost._id, token)
                        }}>Message Seller</button>
                        :
                        <button className={styles.submitButton} onClick = {() => {
                            sendMessage(id, token, postMessage)
                        }}>Send</button>
                    }
                </div>
            </div>
        </main>
    )
}

export default Featured