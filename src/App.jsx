import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import axios from "axios";
import { useDebounce } from "react-use";
import Search from "./Components/Search.jsx";
import MovieCard from "./Components/MovieCard.jsx";
import Spinner from "./Components/Spinner.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const tmdbApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const searchMovies = async (query = "") => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await tmdbApi.get(endPoint);
      if (!response) {
        throw new Error("No response from API");
      }

      if (response.Response === "False") {
        setErrorMessage(response.Error || "Failed to fetch movies..");
        setMovieList([]);
        return;
      }
      setMovieList(response.data.results || []);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      setErrorMessage("Error Fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="/hero.png" alt="Search" />
            <h1>
              Find <span className="text-gradient">Movies</span>You'll Love
              Without The Hassle
            </h1>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2 className="mt-[40px]">Popular</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500 font-semibold m-8">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};
export default App;
