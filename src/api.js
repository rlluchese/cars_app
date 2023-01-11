import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID p218PdG3fshvP97Z1QLnoh0hHe5vBBWrLRBJq84qt3M'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;