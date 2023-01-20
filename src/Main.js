import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gatherPosts } from './apiIndex'
import styles from './Main.module.css'
import Featured from './Featured'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { style } from '@mui/system'


export default function Main ({ setPosts, posts, token, isAuthenticated, userName}) {

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
                    {
                      token ?
                          <span className={styles.heading}>For sale, near&nbsp;
                            <Link to = '/profile' className = {styles.loginLink}>{userName}</Link>
                          </span>
                        : 
                        <span className={styles.heading}>to continue, please&nbsp; 
                            <Link to = "/login" className={styles.loginLink}>log in</Link>
                        </span>
                    }       
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
                            }>  { elem.title ?
                                <h5 className={styles.title}>{elem.title[0].toUpperCase() + elem.title.slice(1)}</h5>
                                  : <h5 className={styles.title}>No title</h5>
                                }
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
                            }>  {elem.title ?
                                    <h5 className={styles.title}>{elem.title[0].toUpperCase() + elem.title.slice(1)}</h5>
                                    : <h5 className={styles.title}>No title</h5>
                                }
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
                <FontAwesomeIcon icon={faQuestionCircle} className={styles.helpIcon} onClick = {() => {
                    alert("click a post to see more info, message the seller, and more!")
                }}
                    title="click a post to see more info, message the seller, and more!"
                />

                <span></span>
                <span className= {styles.spaceHolders}></span>
           </> 
    )
}
