import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID p218PdG3fshvP97Z1QLnoh0hHe5vBBWrLRBJq84qt3M'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);

    return response;
};

export default searchImages;