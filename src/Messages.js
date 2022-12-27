import React from "react";
import styles from './Messages.module.css'


const Messages = ({ postHolder, myMessages }) => {
    return (
        <div className= {styles.postCards}>
           <span className={styles.header}>Your conversation with: &nbsp; <span className= {styles.seller}>{myMessages[1].fromUser.username}</span></span>
           {
            myMessages.map(messageObj => {return (
                <span key = {messageObj._id} className={styles.messages}> 
                   <span className= {styles.seller}>
                      {myMessages[1].fromUser.username} &nbsp;
                   </span>
                   {messageObj.content} 
                </span>
            )
            })
           }
            <span>
                <input name="message" placeholder={`send a message to ${myMessages[1].fromUser.username}`} className={styles.messagebox}></input>
                <button onClick={() => {
                    alert("This page is for demo purposes only, our API doesn't currently support sending messages from the seller to the buyer!")
                    

                }
                }>Send</button>
            </span>
        </div>
    )
}

export default Messages