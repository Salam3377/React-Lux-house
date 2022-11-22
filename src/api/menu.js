import apiUrl from '../apiConfig'
import axios from 'axios'


export const menuIndex = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/menu/'
    })
}