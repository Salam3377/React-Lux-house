import apiUrl from '../apiConfig'
import axios from 'axios'


export const cartIndex = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/cart/',
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