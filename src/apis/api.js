const BASE_URL = 'https://webcraft-server.vercel.app/api/v1'

export const getAllServices = async () => {
    try {
        const response = await fetch(`${BASE_URL}/services`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getSingleService = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/services/${id}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to propagate it
    }
}
