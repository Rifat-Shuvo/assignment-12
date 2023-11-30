import axios from 'axios';

const axiosbase = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return axiosbase
};

export default useAxios;