//the home for all api calls

export const cohortURL = "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt"


export async function gatherPosts (token) {

    try {
        const response = await fetch(`${cohortURL}/posts`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        

        return data
    }
    catch (error){
        throw error
    }
        // await fetch(`${cohortURL}/posts`)
        //     .then (response =>  response.json())
        //     .then (results => {console.log(results); return results})
        //     .catch (console.error)

}

export async function register (name, password) {
    try {
        const response = await fetch(`${cohortURL}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
                username: name,   
                password: password
            }
          })
        })
        const json = await response.json()
        console.log(json)

        return json
    }
    catch (error) {
        throw error
    }
}

export async function login(name, password) {
    try {
        const response = await fetch(`${cohortURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: name,
                    password: password
                }
            })
        })
        const json = await response.json()

        return json
    }
    catch (error) {
        console.error(error)
    }

}

export async function createPost ( token, title, description, price, delivery ) {
    try {
        const response = await fetch (`${cohortURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: delivery
                }
            })
        })
        const json = await response.json()

        console.log(json)

        return json

    } catch (error) {
        console.error(error)
    }
}

export async function deletePost (id, token) {
    try {
    const response = await fetch (`${cohortURL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }    
    })
    const json = await response.json()

    console.log("this is delete", json)
    }
    catch (error) {
        console.error(error)
    }
}

export async function myPosts (token) {
    try {
        const response = await fetch (`${cohortURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()

        console.log('This is myPosts', json)
        return json
    } catch (error) {
        throw error
    }
}

export async function sendMessage (postID, token, message) {
    try {
        const response = await fetch (`${cohortURL}/posts/${postID}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: message
                }
            })
        })
        const json = await response.json()

        return json
    } catch (error) {
        console.error(error)
    }
}

export async function editPost (id, title, description, price, delivery, token) {
    try {
        const response = await fetch (`${cohortURL}/posts/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: delivery
                }
            })
        })
        const json = await response.json()

        console.log("this is the edit response", json)
        return json
        }
    catch (error) {
        console.error(error)
    }
}