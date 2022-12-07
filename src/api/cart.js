import apiUrl from '../apiConfig'
import axios from 'axios'

// how can you get a user's cart if they aren't signed in ? 
export const cartIndex = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/cart/',
        // headers: {
        //     Authorization: `Token ${user.token}`
        //}
    })
}
// bad naming convention v
export const addCartIndex = (id) => {
    return axios({
        method: "POST",
        url: apiUrl + '/cart/' + id + '/',
        // headers: {
        //     Authorization: `Token ${user.token}`
        //}
    })
}

// export const cartCreate = () => {
//     return axios({
//         method: "POST",
//         url: apiUrl + '/cart/',
//         // headers: {
//         //     Authorization: `Token ${user.token}`
//         //}
//     })
// }

// export const cartRemove = () => {
//     return axios({
//         method: "DELETE",
//         url: apiUrl + '/cart/',
//         // headers: {
//         //     Authorization: `Token ${user.token}`
//         //}
//     })
// }