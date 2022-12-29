import React from "react";
import styles from "./Edit.module.css"

const Edit = ({ post, token }) => {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.postCards}>
                    <h5 className={styles.title}>{post.title[0].toUpperCase() + post.title.slice(1)}</h5>
                    <p className={styles.description}>{post.description}</p>
                    <p className={styles.price}>Price: {post.price}</p>
                    <p > <span className={styles.spans}>Location: &nbsp; </span>{post.location.split("[").join('').split(']').join('')}</p>
                    <p><span className={styles.spans}>Willing to deliver: &nbsp;</span></p>
                    <p><span className={styles.spans}> Date Created: &nbsp;</span> {
                        post.updatedAt
                            .split('')
                            .slice(5, 10)
                            .join('')
                        + "-"
                        + post.updatedAt.split("")
                            .slice(0, 4)
                            .join('')
                    }
                    </p>


                    <div className={styles.buttonWrapper}>
                        <button>update post</button>
                        <button className={styles.buttons}>delete</button>
                        <button className={styles.buttons}>back</button>
                    </div>
                </div>
            </div>
            <input placeholder={post.title}></input>
        </div>

    )
}

export default Edit