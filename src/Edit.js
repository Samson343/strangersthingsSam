import React from "react";
import styles from "./Edit.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Edit = ({ post, token, setRenderEdit }) => {

    const [editTitle, setEditTitle] = useState(false)
    const [editDesc, setEditDesc] = useState(false)
    const [editPrice, setEditPrice] = useState(false)
    const [editLocation, setEditLoaction] = useState(false)
    const [editDelivery, setEditDelivery] = useState (false)

    const [titleUpdate, setTitleUpdate] = useState ('')
    const [descUpdate, setDescUpdate] = useState ('')
    const [priceUpdate, setPriceUpdate] = useState ('')
    const [locationUpdate, setLocationUpdate] = useState ('')
    const [deliveryUpdate, setDeliveryUpdate] = useState ('')


    return (
        <>
        <h5 className={styles.heading}>Edit/Update Post</h5>
        <div className={styles.main}>
            <div>
                <div className={styles.postCards}>
                    { !editTitle ?
                    <h5 className={styles.title}>{post.title[0].toUpperCase() + post.title.slice(1)} &nbsp;
                        <button className={styles.editButtons} onClick={() => {
                            setEditTitle(true)
                        }}>...</button>
                    </h5>
                    : <div>
                        <input className = {styles.editInput} placeholder={post.title[0].toUpperCase() + post.title.slice(1)}></input>
                      </div>
                    }
                        
                    <p className={styles.description}>{post.description} &nbsp;
                        <button className={styles.editButtons} onClick={() => {
                            setEditDesc(true)
                        }}>...</button>
                    </p>
                    <p className={styles.price}>Price: {post.price} &nbsp;
                    <button className={styles.editButtons} onClick={() => {
                            setEditPrice(true)
                        }}>...</button>
                    </p>
                    <p > <span className={styles.spans}>Location: &nbsp; </span>{post.location.split("[").join('').split(']').join('')} &nbsp;
                    <button className={styles.editButtons} onClick={() => {
                            setEditLoaction(true)
                        }}>...</button>
                    </p>
                    <p><span className={styles.spans}>Willing to deliver: &nbsp;</span> &nbsp;
                    <button className={styles.editButtons} onClick={() => {
                            setEditDelivery(true)
                        }}>...</button>
                    </p>
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
                    <button className={styles.editButtons} onClick={() => {

                        }}>...</button>
                    </p>


                    <div className={styles.buttonWrapper}>
                        <button className={styles.backButton} onClick = {() => {
                            setRenderEdit(false)
                        }}>back</button>
                        <button className={styles.buttons}>delete</button>
                        <button>update post</button>  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit