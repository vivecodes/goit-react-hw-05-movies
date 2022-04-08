import axios from "axios";

export class ApiService {
    _BASE_URL = 'https://api.themoviedb.org/3/';
    _API_KEY = '5bb22c57348a36de617928c842cde881';

    async fetchTrendingMovies() {
        const response = await axios.get(`${this._BASE_URL}trending/movie/day?api_key=${this._API_KEY}`);
        return response;
    };

    async fetchMovieDetails(id) {
        const response = await axios.get(`${this._BASE_URL}movie/${id}?api_key=${this._API_KEY}`);
        return response;
    }

    async fetchMovieCast(id) {
        const response = await axios.get(`${this._BASE_URL}movie/${id}/credits?api_key=${this._API_KEY}`);
        return response;
    }

    async fetchMovieReviews(id) {
        const response = await axios.get(`${this._BASE_URL}movie/${id}/reviews?api_key=${this._API_KEY}`);
        return response;
    }

    async fetchMoviesByName(searchQuery) {
        const response = await axios.get(`${this._BASE_URL}search/movie?api_key=${this._API_KEY}&query=${searchQuery}`);
        return response;
    }
}