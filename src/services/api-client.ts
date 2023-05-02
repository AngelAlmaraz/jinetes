import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '30d68053d5f04c4aaa34b798c50bfebf'
    }
})