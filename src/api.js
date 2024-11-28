import axios from 'axios';

const API_KEY = process.env.API_KEY || 'dca31f3e2abb0de0ae1a4607bdbfab29';
const BASE_URL = 'http://api.weatherstack.com';

export const getCurrentWheather = async (location) => {
    try {
        const response = await axios.get(`${BASE_URL}/current`, {
            params: {
                access_key: API_KEY,
                query: location,
            }
        })
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error("Getting wether data error");
    }
}
