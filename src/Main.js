import React from 'react'
import { useEffect } from 'react'
import { gatherPosts } from './apiIndex'
import styles from './Main.module.css'

export default function Main ({ setPosts, posts}) {

    useEffect(() => {
        gatherPosts()
                .then(data => {
                    setPosts(data.data.posts)
                    console.log(data.data.posts)
                })
                .catch((error) => {
                    console.log(error)
                })

    }, [])
    console.log(posts)

    return (
        <div className={styles.main}>
            {
                posts.map((elem, index) => (
                        
                    <div key = {index} className = {styles.postCards}>
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
