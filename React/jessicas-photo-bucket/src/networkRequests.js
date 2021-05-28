const ACCESS_KEY = 'jQeqouTK2JNin8WIzZaVGnb4VMj4G8pURIxOq-s_Dbc'
const BASE_URL = 'https://api.unsplash.com/';
const endPoints = {
    random: '/photos/random/'
}

export const randomPhoto = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.random}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        }
    })
    .then(res => res.json())
    .then(res => res);

    return response;
}