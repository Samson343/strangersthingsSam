import React, { useState } from 'react'
import { useEffect } from 'react'
import { gatherPosts } from './apiIndex'
import styles from './Main.module.css'
import Featured from './Featured'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'


export default function Main ({ setPosts, posts, token, isAuthenticated}) {

    const [shouldFeature, setShouldFeature] = useState(false)
    const [featureKey, setFeatureKey] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])
    const [showSearchBar, setShowSearchbar] = useState(false)

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

    //would love to use this line to uppercase the first letter but it hates it every once in a while elem.title[0].toUpperCase() + elem.title.slice(1)

    useEffect(() => {
        setFilteredPosts(posts.filter(elem => {
            return elem.title.toLowerCase().includes(searchValue) || 
            elem.description.toLowerCase().includes(searchValue) ||
            elem.author.username.toLowerCase().includes(searchValue)
          })
        )
    }, [searchValue])


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
           <>
                <div className={styles.searchWrapper}>
                    <span className={styles.heading}>For sale, near you</span>       
                    <span className={styles.searchNav}>
                        {showSearchBar &&
                        <input placeholder="search by title, description, or seller's name" className={styles.searchbar} value = {searchValue} onChange = {(e) => {
                            setSearchValue(e.target.value)
                        }}
                        ></input>
                        }
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} 
                            onClick = {() => {
                                if (!showSearchBar) {
                                  setShowSearchbar(true)
                                }
                                else {setShowSearchbar(false)}
                            }}
                        />
                    </span>
                </div>
         
                <div className={styles.main}>
                    {
                        !searchValue ?
                        posts.map((elem, index) => (

                            <div key={index} className={styles.postCards} onClick={(e) => {
                                setShouldFeature(true)
                                setFeatureKey(elem)
                                console.log("this is the elem", elem)

                            }
                            }> 
                                <h5 className={styles.title}>{elem.title}</h5>
                                <p className={styles.description}>{elem.description}</p>
                                <p className={styles.price}>Price: {elem.price}</p>
                                <p className={styles.seller}>
                                    <span className={styles.spans}>Seller: &nbsp;</span>
                                    {elem.author.username}
                                </p>
                            </div>
                        )
                        )
                        : 
                        filteredPosts.map((elem, index) => (

                            <div key={index} className={styles.postCards} onClick={(e) => {
                                setShouldFeature(true)
                                setFeatureKey(elem)
                                console.log("this is the elem", elem)

                            }
                            }>
                                <h5 className={styles.title}>{elem.title}</h5>
                                <p className={styles.description}>{elem.description}</p>
                                <p className={styles.price}>Price: {elem.price}</p>
                                <p className={styles.seller}>
                                    <span className={styles.spans}>Seller: &nbsp;</span> 
                                    {elem.author.username}
                                </p>
                            </div>
                        )
                        )
                        
                    }
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
           </> 
    )
}
