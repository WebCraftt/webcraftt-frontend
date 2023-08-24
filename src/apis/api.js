import axios from "axios";
const BASE_URL = 'https://web-craft-server.vercel.app/api/v1/'

export const getAllServices = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${BASE_URL}/services`);
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
};


