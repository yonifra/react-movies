import React, { useState } from "react";
import CardsContainer from "./cardsContainer";

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault(); // prevents refreshing

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json()
            await setMovies(data.results)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <input className="input" type="text" name="query"
                    placeholder="Movie name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            <CardsContainer movies={movies} />
        </>
    )
}