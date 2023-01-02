import React from "react";
import styles from "./Edit.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { editPost } from "./apiIndex";
import { Redirect } from "react-router-dom";

const Edit = ({ post, token, setRenderEdit }) => {

    const [editTitle, setEditTitle] = useState(false)
    const [editDesc, setEditDesc] = useState(false)
    const [editPrice, setEditPrice] = useState(false)
    const [editLocation, setEditLocation] = useState(false)
    const [editDelivery, setEditDelivery] = useState(false)

    const [titleUpdate, setTitleUpdate] = useState(post.title)
    const [descUpdate, setDescUpdate] = useState(post.description)
    const [priceUpdate, setPriceUpdate] = useState(post.price)
    const [locationUpdate, setLocationUpdate] = useState(post.location)
    const [deliveryUpdate, setDeliveryUpdate] = useState(false)


    return (
        <>
            <h5 className={styles.heading}>Edit/Update Post</h5>
            <div className={styles.main}>
                <div>
                    <div className={styles.postCards}>
                        {!editTitle ?
                            <h5 className={styles.title}>{post.title} &nbsp;
                                <button className={styles.editButtons} onClick={() => {
                                    setEditTitle(true)
                                }}>...</button>
                            </h5>
                            : <div>
                                <input className={styles.editInput} placeholder={post.title} value={titleUpdate} onChange={(e) => {
                                    setTitleUpdate(e.target.value)
                                }}></input>
                                <button className={styles.editButtons} onClick={() => {
                                    setEditTitle(false)
                                }}>cancel</button>
                            </div>
                        }
                        {
                            !editDesc ?
                            <p className={styles.description}>{post.description} &nbsp;
                                <button className={styles.editButtons} onClick={() => {
                                    setEditDesc(true)
                                }}>...</button>
                            </p>
                            : <div>
                                <input placeholder={post.description} className={styles.editInput} value={descUpdate} onChange={(e) => {
                                    setDescUpdate(e.target.value)
                                }}></input>
                                <button className={styles.editButtons} onClick={() => {
                                    setEditDesc(false)
                                }}>cancel</button>
                            </div>
                        }
                        {
                            !editPrice ?
                                <p className={styles.price}>Price: {post.price} &nbsp;
                                    <button className={styles.editButtons} onClick={() => {
                                        setEditPrice(true)
                                    }}>...</button>
                                </p>
                                : <div>
                                    <input placeholder={post.price} className={styles.editInput} value={priceUpdate} onChange={(e) => {
                                        setPriceUpdate(e.target.value)
                                    }}></input>
                                    <button className={styles.editButtons} onClick={() => {
                                        setEditPrice(false)
                                    }}>cancel</button>
                                </div>
                        }
                        {
                            !editLocation ?
                            <div className={styles.location}>
                                <span className={styles.locationInfo}>
                                    <span className={styles.spans}>Location: &nbsp; </span>
                                    {post.location.split("[").join('').split(']').join('')} &nbsp;
                                </span>
                                <button className={styles.editButtons} onClick={() => {
                                    setEditLocation(true)
                                }}>...</button>
                            </div>
                            : <div>
                                <input placeholder={post.location.split("[").join('').split(']').join('')} className={styles.editInput} value={locationUpdate} onChange={(e) => {
                                    setLocationUpdate(e.target.value)
                                }}></input>
                                <button className={styles.editButtons} onClick={() => {
                                    setEditLocation(false)
                                }}>cancel</button>
                            </div>
                        }
                        {
                            !editDelivery ?
                                
                                <p className={styles.location}><span className={styles.spans}>Willing to deliver: &nbsp;</span> &nbsp;
                                    <button className={styles.editButtons} onClick={() => {
                                        setEditDelivery(true)
                                    }}>...</button>
                                </p>
                                : <div className={styles.delivery}>
                                    <p className={styles.spans}> Delivery? &nbsp;
                                        <input type="checkbox" name="willDeliver"></input>
                                        <button className={styles.editButtons} onClick={() => {
                                            setEditDelivery(false)
                                        }}>cancel</button>
                                    </p>
                                </div>
                        }

                        <p><span className={styles.spans}> Date Created: &nbsp;</span> {
                            post.updatedAt
                                .split('')
                                .slice(5, 10)
                                .join('')
                            + "-"
                            + post.updatedAt.split("")
                                .slice(0, 4)
                                .join('')
                        } &nbsp;
                        </p>

                        <div className={styles.buttonWrapper}>
                            <button className={styles.backButton} onClick={() => {
                                setRenderEdit(false)
                            }}>back</button>
                            <button className={styles.buttons}>delete</button>
                            <button onClick={async () => {
                                await editPost(post._id, titleUpdate, descUpdate, priceUpdate, deliveryUpdate, token)
                                    .then((data) => {
                                        data.success && setRenderEdit(false)
                                    })
                            }
                            }
                            >update post</button>
                        </div>
                    </div>
                </div>
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

export default Edit