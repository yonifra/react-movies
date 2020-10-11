import React, {useState} from "react";
import imdbLogo from '../Resources/imdb.png'

function formatMoney(n) {
    return "$ " + (Math.round(n * 100) / 100).toLocaleString();
}

function formatTime(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "mins";
}

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
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US`

    getMovieData(apiUrl)

    if (!movie) {
        return <div />
    }

    return (
        <div className='flex-container'>
            <div className='flex-container-row'>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
                <div className='movie-details-header'>
                    <h1>{movie.original_title} ({movie.release_date.substring(0,4)})</h1>
                    <h5>Genres: {movie.genres.map(genre => genre.name + ' / ')}</h5>
                    <h5>Budget: {formatMoney(movie.budget)}</h5>
                    <h5>Revenue: {formatMoney(movie.revenue)}</h5>
                    <h5>Runtime: {formatTime(movie.runtime)}</h5>
                    <div>{movie.production_companies.map(company => <img src={`https://image.tmdb.org/t/p/h60${company.logo_path}`}  width='40px' alt={company.name} key={company.name}/>)}</div>
                    <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer"><img src={imdbLogo} alt='imdb' width='40px'/></a>
                </div>
            </div>
            <div>{movie.overview}</div>
        </div>)
    }