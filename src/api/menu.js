import apiUrl from '../apiConfig'
import axios from 'axios'


export const menuIndex = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/product/',
        // headers: {
        //     Authorization: `Token ${user.token}`
        //}
    })
}