import React from "react";
import { useEffect } from "react";
import { myPosts } from "./apiIndex";
import { useState } from "react";
import styles from './ProfilePage.module.css'


const Profile = ({ token }) => {
    const [myItems, setMyItems] = useState ([])
    const [myMessages, setMyMessages] = useState ([])
    const [renderMessages, setRenderMessages] = useState (false)

    useEffect(() => {
        myPosts(token)
                .then(data => {
                    setMyItems(
                        data.data.posts.filter(elem => elem.active)
                    )
                    console.log('this is myItems', myItems)
                })
                .catch((error) => {
                    console.log(error)
                })
    }, [])

    return (
        <>
        <h5 className= {styles.heading}>My Posts</h5>
        <div className= {styles.main}>
            {
                myItems.map((elem, index) => {
                    return (
                        <div>
                            <div key={index} className={styles.postCards} onClick={(e) => {

                            }
                            }>
                                <h5 className={styles.title}>{elem.title[0].toUpperCase() + elem.title.slice(1)}</h5>
                                <p className={styles.description}>{elem.description}</p>
                                <p className={styles.price}>Price: {elem.price}</p>
                                
                                
                                <div className= {styles.buttonWrapper}>
                                <button className= {styles.buttons}>delete</button>
                                <button className= {styles.buttons}>edit</button>
                                {
                                    elem.messages.length !== 0 &&
                                    <button className= {styles.buttons} onClick = {() => {
                                        renderMessages === true ?
                                        setRenderMessages (false) :
                                        setRenderMessages(true);  
                                        setMyMessages(elem.messages)
                                        
                                        console.log('this is my messages', myMessages)
                                        console.log('this is the elem', elem)
                                    }}>View Messages</button>
                                }
                                {
                                    renderMessages && elem.messages.length !== 0 && 
                                    //the issue here is that if one message array has more messages than the other then it tries to read an _id that doesn't exist
                                    
                                    myMessages.map(((message, index) => {
                                        return (
                                            myMessages[index]._id === elem.messages[index]._id &&
                                             
                                             <div className={styles.messagesBox}>
                                                    <span key={index} className={styles.messages}>{message.content} &nbsp;
                                                        <span className={styles.seller}>From: &nbsp;{message.fromUser.username}</span>
                                                    </span> 
            
                                            </div> 
                                        )
                                      })
                                    )
                                      
                                    // myMessages.map(((message, index) => {
                                    //     return (
                                    //         <p key = {index}>{message.content}</p>     
                                    //     )
                                    //   })
                                    // )
                                }

                                
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
        </>
    )
}

export default Profile