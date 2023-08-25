const popularUrl = 'https://www.reddit.com/r/popular.json'
const searchUrl = 'https://www.reddit.com/search.json?q='

export async function fetchPopularPosts() {
    try {
        const response = await fetch(popularUrl);
        const data = await response.json();
        return data
    } catch (error) {
        return console.log(error);
    }
}

export async function fetchSearch(searchTerm) {
    try {
        const response = await fetch(searchUrl + searchTerm)
        const data = await response.json()
        return data
    } catch (error) {
        return console.log(error)
    }
}