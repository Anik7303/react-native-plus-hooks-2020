import axios from 'axios'

const trackerApi = axios.create({
    baseURL: 'http://192.168.0.101:5000',
})

export default trackerApi
