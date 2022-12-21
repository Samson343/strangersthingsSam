import React from "react";
import { useEffect } from "react";
import { myPosts } from "./apiIndex";
import { useState } from "react";
import styles from './ProfilePage.module.css'


const Profile = ({ token }) => {
    const [myItems, setMyItems] = useState ([])

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
        <h5 className= {styles.heading}>Profile Homepage</h5>
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