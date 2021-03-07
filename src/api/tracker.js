import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const trackerApi = axios.create({
    baseURL: 'http://192.168.0.101:5000',
})

trackerApi.interceptors.request.use(
    async (configs) => {
        const token = await AsyncStorage.getItem('token')
        if (token) configs.headers.Authorization = `Bearer ${token}`
        return configs
    },
    (err) => Promise.reject(err)
)

export default trackerApi
