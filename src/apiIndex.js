//the home for all api calls

export const cohortURL = "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt"


export async function gatherPosts () {

    try {
        const response = await fetch(`${cohortURL}/posts`)
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