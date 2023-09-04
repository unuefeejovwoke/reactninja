import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=1ca1a158';
const movie1 = {
    
    "Title": "One Punch Man - Wanpanman: The Pupil Who Is an Extremely Poor Talker",
    "Year": "2016",
    "imdbID": "tt5421738",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDA2NzAyN2EtNjI1OC00YmFhLWI1YjEtOTU2MWZkZTg0MTRiXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_SX300.jpg"
    
}

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setsearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('One Punch man');
    }, []);

    return (
        <div className="app">
            <h1>AnimeLand</h1>

            <div className="search">
                <input 
                  type="text"
                  placeholder="Search for Animes"
                  value={searchTerm} 
                  onChange={(e) => setsearchTerm(e.target.value)}/>

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : (
                <div className="empty">
                <h2>No movies found</h2>
                </div>
            )}
    </div>
    );
};
 
export default App;