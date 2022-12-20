import React, { useState } from 'react'
import { useEffect } from 'react'
import { gatherPosts } from './apiIndex'
import styles from './Main.module.css'
import Featured from './Featured'

export default function Main ({ setPosts, posts, token, isAuthenticated}) {

    const [shouldFeature, setShouldFeature] = useState(false)
    const [featureKey, setFeatureKey] = useState('')

    useEffect(() => {
        gatherPosts(token)
                .then(data => {
                    setPosts(data.data.posts)
                    console.log(token)
                })
                .catch((error) => {
                    console.log(error)
                })

    }, [shouldFeature])


    return (
        shouldFeature ?
        <Featured 
            clickedPost = {featureKey}
            setShouldFeature = {setShouldFeature}
            // isAuthenticated = {isAuthenticated}
            token = {token}
            id = {featureKey._id}

        />
        :
        <div className={styles.main}>
            {
                posts.map((elem, index) => (
                        
                    <div key = {index} className = {styles.postCards} onClick = { (e) => {
                        setShouldFeature(true)
                        setFeatureKey(elem)
                        console.log("this is the elem", elem)

                      }
                    }>
                        <h5 className= {styles.title}>{elem.title[0].toUpperCase() + elem.title.slice(1)}</h5>
                        <p className= {styles.description}>{elem.description}</p>
                        <p className= {styles.price}>Price: {elem.price}</p>
                        <p className= {styles.seller}>Seller: {elem.author.username}</p>
                    </div>
                )  
            )
            }
        </div> 
        
        
    )
}
