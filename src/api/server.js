import axios from 'axios'

const url = 'https://f6c0ce03efac.ngrok.io'

export default axios.create({ baseURL: url })
