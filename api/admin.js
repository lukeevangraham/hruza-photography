import axios from "axios"

export async function fetchAdminAPI(path) {
    const response = await axios.get(`https://hruzaadmin.grahamwebworks.com${path}`)
    return response.data;
}