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
