//const API_KEY = "adcb3aa5aa47e6f2186a2b7f48567909";

const requests = {
fetchTrending:
"https://api.themoviedb.org/3/trending/all/week?api_key=adcb3aa5aa47e6f2186a2b7f48567909",
fetchNetflixOriginals:
"https://api.themoviedb.org/3/trending/all/week?api_key=adcb3aa5aa47e6f2186a2b7f48567909",
fetchTopRated:
"https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=adcb3aa5aa47e6f2186a2b7f48567909&language=en-US",
fetchActionMovies:
"https://api.themoviedb.org/3/discover/movie?api_key=adcb3aa5aa47e6f2186a2b7f48567909&with_genres=28",
fetchComedyMovies:
"https://api.themoviedb.org/3/discover/movie?api_key=adcb3aa5aa47e6f2186a2b7f48567909&with_genres=35",
fetchHorrorMovies:
"https://api.themoviedb.org/3/discover/movie?api_key=adcb3aa5aa47e6f2186a2b7f48567909&with_genres=27",
fetchRomanceMovies:
"https://api.themoviedb.org/3/discover/movie?api_key=adcb3aa5aa47e6f2186a2b7f48567909&with_genres=10749",
fetchDocumentaries:
"https://api.themoviedb.org/3/discover/movie?api_key=adcb3aa5aa47e6f2186a2b7f48567909&with_genres=99"
}

export default requests;