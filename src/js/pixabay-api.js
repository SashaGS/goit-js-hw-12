
import axios from "axios";

const myApiKey = "56294384-c3e46a2de7dfa7e052cf699f1";

axios.defaults.baseURL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: myApiKey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    
    const data = (await axios.get(`?${searchParams}`)).data;
    
    return data;
    
    // return axios.get(`?${searchParams}`).then(response => response.data);
}
