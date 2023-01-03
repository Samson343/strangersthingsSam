import React, { useEffect } from "react";
import { createPost } from "./apiIndex";
import { useState } from "react";
import styles from './CreatePost.module.css'
import { Redirect } from "react-router";

const CreatePost = ({ token }) => {

    const [pTitle, setpTitle] = useState('')
    const [pDescription, setpDescription] = useState('')
    const [pPrice, setpPrice] = useState('')
    const [pLocation, setpLocation] = useState('')
    const [pDelivery, setpDelivery] = useState(false)
    const [createSuccess, setCreateSuccess] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const onChangeHandler = (setter, event) => {
        setter(event.target.value)
    }

    useEffect (() => {
        if (createSuccess) {
                setTimeout(() => {return setRedirect(true)}, 3500)
        }
    }, [createSuccess])

    return (
        <form className = { styles.postCard }onSubmit = { async (e) => {
            e.preventDefault()
            console.log(pTitle, pDescription, pPrice, pLocation, pDelivery, token)
            try {
                await createPost ( token, pTitle, pDescription, pPrice, pDelivery )
                    .then((data) => {
                        console.log(data)
                        setpTitle('')
                        setpDescription('')
                        setpPrice('')
                        setpLocation('')
                        setpDelivery('')
                        setCreateSuccess(true)
                        // setTimeout (() => {console.log("timeout triggered"); redirect = true}, 3000)
                    })
                
            } catch (error) {
                console.error(error)
            }

        }
        }>
            <h4 className={styles.header}>Create New Post</h4>

            <label className={styles.inputs}>
                Title
                <input className={styles.input} name="title" value={pTitle} onChange={event => onChangeHandler(setpTitle, event)} required>
                </input>
            </label>
            <label className={styles.inputs}>
                Description
                <input className={styles.input} name="description" value={pDescription} onChange={event => onChangeHandler(setpDescription, event)} required>
                </input>
            </label>

            <label className={styles.inputs}>
                Price
                <input className={styles.input} name="price" value={pPrice} onChange={event => onChangeHandler(setpPrice, event)} required>
                </input>
            </label>

            <label className={styles.inputs}>
                Location of item
                <input className={styles.input} name="location" value={pLocation} onChange={event => onChangeHandler(setpLocation, event)}>
                </input>
            </label>

            <label className={styles.inputs}>
                Willing to deliver?
                <input type="checkBox" name="willDeliver" checked={pDelivery} onChange={event => { setpDelivery(event.target.checked) }}>
                </input>
            </label>
            {
                createSuccess &&
                <>
                    <p className={styles.success}>Success! Redirecting you to the main page...</p>
                </>
            }
            {   redirect &&
                <Redirect to="/" />
            }
            <button className={styles.submitButton}>Create Post</button>

            {!token && 
                <>
                <Redirect to = "login"></Redirect>
                {alert('please login to continue')}
                </>
            }
        </form>
    )

}

export default CreatePost