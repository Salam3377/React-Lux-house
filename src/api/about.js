import apiUrl from "../apiConfig";
import axios from 'axios'

export const aboutPage = () => {
    return axios({
        method: "GET",
        url: apiUrl + '/about/',
    })
}