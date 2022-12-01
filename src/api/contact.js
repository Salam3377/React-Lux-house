import apiUrl from "../apiConfig";
import axios from 'axios'

export const contactPage = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/contact/',
    })
}
export const sendContactData = (name, email, message) => {
    return axios({
        method: "POST",
        url: apiUrl + '/contact/',
        data: {
            name,
            email,
            message
        }
    })
}
