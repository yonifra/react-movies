import React from 'react'
import { Card } from 'semantic-ui-react'
import MovieCard from './movieCard'

const CardsContainer = (props) => (
  <Card.Group itemsPerRow={6} className="ui six cards">
    {props.movies
        .filter(movie => movie.poster_path)
        .map(movie => (
            <Card raised image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} key={movie.id} />
    ))}
  </Card.Group>
)

export default CardsContainer