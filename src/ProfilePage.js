import React from "react";
import { useEffect } from "react";
import { myPosts } from "./apiIndex";
import { useState } from "react";
import styles from './ProfilePage.module.css'
import Messages from "./Messages";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import { Redirect } from "react-router-dom";
import { deletePost } from "./apiIndex";


const Profile = ({ token }) => {
    const [myItems, setMyItems] = useState([])
    const [myMessages, setMyMessages] = useState([])
    const [renderMessages, setRenderMessages] = useState(false)
    const [shouldReply, setShouldReply] = useState (false)
    const [postHolder, setPostHolder] = useState ('')
    const [renderEdit, setRenderEdit] = useState (false)
    const [updatePosts, setUpdatePosts] = useState (false)


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
    }, [renderEdit, updatePosts])

    return (
        shouldReply ? 

            <Messages 
                postHolder = {postHolder}
                myMessages = {myMessages}
            
            />

            :
        renderEdit ?
            <Edit
              post = {postHolder}
              token = {token}
              setRenderEdit = {setRenderEdit}
            />
            :
        <> 
            <h5 className={styles.heading}>My Posts</h5>
            <div className={styles.main}>
                {
                    myItems.map((elem, index) => {
                        return (
                            <div>
                                <div key={index} className={styles.postCards} onClick={(e) => {

                                }
                                }>  
                                    {elem.title ?
                                        <h5 className={styles.title}>{elem.title[0].toUpperCase() + elem.title.slice(1)}</h5>
                                        : <h5 className={styles.title}>No title</h5>
                                    }
        
                                    <p className={styles.description}>{elem.description}</p>
                                    <p className={styles.price}>Price: {elem.price}</p>


                                    <div className={styles.buttonWrapper}>
                                        <button className={styles.buttons} onClick={async () => {
                                            await deletePost(elem._id, token).then(() => {
                                                setUpdatePosts(true)
                                            })
                                        }
                                        }
                                        >delete</button>
                                        <button className={styles.buttons} onClick = { () => {
                                            setRenderEdit(true)
                                            setPostHolder(elem)
                                            }
                                        }
                                        >edit</button>
                                        {
                                            elem.messages.length !== 0 &&
                                            <button className={styles.buttons} onClick={() => {
                                                renderMessages === true ?
                                                    setRenderMessages(false)
                                                    :
                                                      setRenderMessages(true);
                                                      setMyMessages(elem.messages)

                                                console.log('this is my messages', myMessages)
                                                console.log('this is the elem', elem)
                                            }}>View Messages</button>
                                        }
                                        {
                                            renderMessages && elem.messages.length !== 0 &&
                                            
                                            <div className={styles.messageWrapper}>
                                                {
                                                    myMessages.map(((message, index) => {
                                                        return (
                                                            myMessages[0]._id === elem.messages[0]._id &&

                                                            <div className={styles.messagesBox}>
                                                                <span key={index} className={styles.messages}>{message.content} &nbsp;
                                                                    <span className={styles.seller}>From: &nbsp;{message.fromUser.username}</span>
                                                                    <button title="reply?" className={styles.replyButton} onClick = { () => {
                                                                        setPostHolder(elem)
                                                                        setShouldReply(true)

                                                                       }
                                                                    }
                                                                    > ... </button>
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                    )
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {!token && 
                <>
                <Redirect to = "login"></Redirect>
                {alert('please login to continue')}
                </>
            }
        </>
    )
}

export default Profile