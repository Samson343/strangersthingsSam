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
            <h4>Create New Post</h4>
            <label>
                Title
            </label>
            <input name = "title" value = {pTitle} onChange = {event => onChangeHandler(setpTitle, event)} required>
            </input>
            <label>
                Description
            </label>
            <input name = "description" value = {pDescription} onChange = {event => onChangeHandler(setpDescription, event)} required>
            </input>
            <label>
                Price
            </label>
            <input name = "price" value = {pPrice} onChange = {event => onChangeHandler(setpPrice, event)} required>
            </input>
            <label>
                Location of item
            </label>
            <input name = "location" value = {pLocation} onChange = {event => onChangeHandler(setpLocation, event)}>
            </input>
            <label>
                Willing to deliver?
            </label>
            <input type = "checkBox" name = "willDeliver" checked = {pDelivery} onChange = {event => { setpDelivery(event.target.checked)}}>      
            </input>
            <button className= {styles.createButton}>Create</button>

        </form>
    )

}

export default CreatePost