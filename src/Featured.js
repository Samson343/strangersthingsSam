import React, { useEffect } from "react";
import styles from './Featured.module.css'
import { useState } from "react";
import { deletePost, sendMessage } from "./apiIndex";
import { Redirect } from "react-router";



const Featured = ({ clickedPost, setShouldFeature, token, id }) => {
    const [delivery, setDelivery] = useState("")
    const [isMessageBox, setIsMessageBox] = useState(false)
    const [postMessage, setPostMessage] = useState ('')
    const [renderSendButton, setRenderSendButton] = useState (false)
    const [successMessage, setSuccessMessage] = useState (false)

    useEffect(() => {
        setDelivery(clickedPost.willDeliver ?
            "Yes" : "No, pickup only")
    }, [])
    
    useEffect (() => {
        if(successMessage) {
            setTimeout( () => {setSuccessMessage(false)}, "3000")
        }
    }, [successMessage])


    

    return (
        <main className = {styles.main}>
            <div className={styles.postCard}>
                { clickedPost.title ?
                    <h5 className={styles.title}>{clickedPost.title[0].toUpperCase() + clickedPost.title.slice(1)}</h5>
                    : <h5 className={styles.title}>No title</h5>
                }
                <p className={styles.description}>{clickedPost.description}</p>
                <p className={styles.price}>Price: {clickedPost.price}</p>
                <p > <span className= {styles.spans}>Location: &nbsp; </span>{clickedPost.location.split("[").join('').split(']').join('')}</p>
                <p><span className= {styles.spans}>Willing to deliver: &nbsp;</span> {delivery}</p>
                <p><span className= {styles.spans}> Date Created: &nbsp;</span> {
                    clickedPost.updatedAt
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
                    successMessage ? 
                    <p className= {styles.successMessage}>Success! Your message is on the way to {clickedPost.author.username}</p>
                    : <p className={styles.successMessage}>&nbsp;</p>
                }

                {
                    isMessageBox && 
                    <input placeholder ="send a message to the seller" className = {styles.messageBox} type = "text" name = "message" value = {postMessage} onChange = {(e) => {
                        setPostMessage(e.target.value)
                    
                    }}></input>
                }

                <div className= {styles.buttonWrapper}>
                <button className= {styles.submitButton} onClick = {() => {
                    setShouldFeature (false)
                   }
                }
                > Back</button>
                    {/* if you are not the author, render a message button that switches to a "send" button after it's a clicked */}
                    {!clickedPost.isAuthor ?
                        !renderSendButton ? 
                            <>
                             <p className={styles.spaceHolder}>&nbsp;</p>
                            <button className={styles.submitButton} onClick={() => {
                                setIsMessageBox(true)
                                setRenderSendButton(true)
                                // postMessage(clickedPost._id, token)
                            }}>Message Seller</button>
                            </>
                            :
                            <button className={styles.submitButton} onClick={ async () => {
                                await sendMessage(id, token, postMessage).then((data) => {
                                    data.success && setSuccessMessage(true);
                                    
                                    console.log(successMessage)  
                                })
                                setPostMessage('')
                            }}>Send</button>
                        : clickedPost.isAuthor &&
                        <button className={styles.deleteButton} onClick={async () => {
                            await deletePost(id, token)
                                .then(() => {
                                    setTimeout(setShouldFeature(false), 2500)
                                })
                                .catch(console.error)
                        }
                        }
                        >Delete</button>
                    }
                </div>
                
            </div>
            {!token &&
                <Redirect to = "login"></Redirect>
            }
        </main>
    )
}

export default Featured