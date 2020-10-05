import React, {useState} from "react";

export default function MovieDetails({key}) {
    const [movie, setMovie] = useState();

    async function getMovieData(url) {
        try {
            if (movie) return
            const res = await fetch(url);
            const data = await res.json()
            await setMovie(data)
        } catch (error) {
            console.error(error)
        }
    }

    const movieId = localStorage.getItem('movieId')
    console.log('got movie', movieId)
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US`

    getMovieData(apiUrl)
    console.log(movie)

    if (!movie) {
        return <div />
    }
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
            <h1>{movie.original_title}</h1>
            <h6>{movie.release_date}</h6>
            <h6>Movie budget: {movie.budget}</h6>
            <h5>{movie.tagline}</h5>
            <div>{movie.tagline}</div>
            <div>{movie.overview}</div>
        </div>
        );
}