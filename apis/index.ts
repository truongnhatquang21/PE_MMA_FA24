import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: "https://67125ab86c5f5ced66232c9a.mockapi.io/api/",
    headers: {
        'Content-Type': 'application/json',
    },
})