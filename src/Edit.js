import React from "react";
import styles from "./Edit.module.css"

const Edit = ({post, token}) => {
    return (
        <div className={styles.main}>
                            <div>
                                <div className={styles.postCards}>
                                    <h5 className={styles.title}>{post.title[0].toUpperCase() + post.title.slice(1)}</h5>
                                    <p className={styles.description}>{post.description}</p>
                                    <p className={styles.price}>Price: {post.price}</p>


                                    <div className={styles.buttonWrapper}>
                                        <button>update post</button>
                                        <button className={styles.buttons}>delete</button>
                                        <button className={styles.buttons}>back</button>
                                    </div>
                                </div>
                            </div>
                            <input>asdf</input>
        </div>                        

    )
}

export default Edit