import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://react-my-burger-5f40b.firebaseio.com/'
})

export default instance; 