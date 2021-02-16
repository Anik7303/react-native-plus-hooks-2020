import axios from 'axios'

const url = 'http://f494baa122c2.ngrok.io/'

export default axios.create({ baseURL: url })
