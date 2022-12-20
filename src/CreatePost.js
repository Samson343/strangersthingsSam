import React from "react";
import { createPost } from "./apiIndex";
import { useState } from "react";
import styles from './CreatePost.module.css'

const CreatePost = ({ token }) => {

    const [pTitle, setpTitle] = useState('')
    const [pDescription, setpDescription] = useState('')
    const [pPrice, setpPrice] = useState('')
    const [pLocation, setpLocation] = useState('')
    const [pDelivery, setpDelivery] = useState(false)


    const onChangeHandler = (setter, event) => {
        setter(event.target.value)
    }

    return (
        <form className = { styles.postCard }onSubmit = { async (e) => {
            e.preventDefault()
            console.log(pTitle, pDescription, pPrice, pLocation, pDelivery, token)
            try {
                await createPost ( token, pTitle, pDescription, pPrice, pDelivery )
                    .then(( data ) => {
                        console.log(data)
                    })
                
            } catch (error) {
                console.error(error)
            }

        }
        }>
            <h4 className= {styles.header}>Create New Post</h4>
            
            <label className= {styles.inputs}>
                Title
            <input className={styles.input} name = "title" value = {pTitle} onChange = {event => onChangeHandler(setpTitle, event)} required>
            </input>
            </label>
            <label className= {styles.inputs}>
                Description
                <input className={styles.input} name = "description" value = {pDescription} onChange = {event => onChangeHandler(setpDescription, event)} required>
            </input>
            </label>
            
            <label className= {styles.inputs}>
                Price
                <input className={styles.input} name = "price" value = {pPrice} onChange = {event => onChangeHandler(setpPrice, event)} required>
            </input>
            </label>
        
            <label className= {styles.inputs}>
                Location of item
                <input className={styles.input} name = "location" value = {pLocation} onChange = {event => onChangeHandler(setpLocation, event)}>
            </input>
            </label>
            
            <label className= {styles.inputs}>
                Willing to deliver?
                <input type="checkBox" name="willDeliver" checked={pDelivery} onChange={event => { setpDelivery(event.target.checked) }}>
                </input>
            </label>
            <button className= {styles.submitButton}>Create Post</button>
           
        </form>
    )

}

export default CreatePost