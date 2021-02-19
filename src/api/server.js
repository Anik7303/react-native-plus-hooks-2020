import axios from 'axios'

const url = 'https://cb1a435066ad.ngrok.io'

export default axios.create({ baseURL: url })
