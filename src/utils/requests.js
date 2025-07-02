import axios from "axios";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDNiMzJkMTdhM2JlMzFkY2FmNzdjOTNhNjRmNzY0NyIsInN1YiI6IjY0YjIxOGUwNzg1NzBlMDBlMzNhNmMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1veQ1M-JxaoiwCBCpew_vwDIV47F3jT3xf7KksxCznU'
    }
};

//getting heroSection images......
export const getAllData = async () => {

    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular`, options);
        return data;
    } catch (error) {
        console.log(error)
    }

}


//getting trending movies...
export const getTrending = async () => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, options);
        return data;
    } catch (error) {
        console.log(error)
    }

}

//getting upcoming movies...
export const getUpcoming = async () => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, options);
        return data;
    } catch (error) {
        console.log(error)
    }

}


//getting movies genres's IDs...
export const getMoviesGenres = async () => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, options);
        return data;

    } catch (error) {
        console.log(error)
    }
}
//getting TV shows genres's IDs...
export const getTVshowsGenre = async () => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list`, options);
        return data;

    } catch (error) {
        console.log(error)
    }
}



//discovering movies section with filtering and pagination.....
export const getDiscoverMovies = async (genreId = 28, page) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genreId}`, options);
        return data;

    } catch (error) {
        console.log(error)
    }
}


//discovering tvShows sction with filtering and pagination.....
export const getTVshows = async (genreId = 18, page = 1) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?page=${page}&with_genres=${genreId}`, options);
        return data;

    } catch (error) {
        console.log(error)
    }
}


//getting TVshows,movies with search query.....
export const getSearchResults = async (searchQuery, page) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&page=${page}`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}

//getting TVshows,movies details with id .....
export const getDetailsResults = async (mediaType, id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}


//getting top casts  .....
export const getTopCasts = async (mediaType, id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/credits`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}

//getting similar movies or shows  .....
export const getSimilar = async (mediaType, id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}

//getting  movies or TVshows recommendations  .....
export const getRecommendations = async (mediaType, id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}