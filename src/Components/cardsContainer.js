import React from 'react'
import { Card } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

const CardsContainer = (props) => {

    const history = useHistory();

    return (<Card.Group itemsPerRow={6} className="ui six cards">
      {props.movies && props.movies
          .filter(movie => movie.poster_path)
          .map(movie => (
              <Card raised image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} key={movie.id} className="card"
              alt={movie.original_title}
              header={movie.original_title}
              onClick={(e,data) => {
                  console.log('setting movie', movie)
                  localStorage.setItem('movieId', movie.id)
                  history.push('/movie')
                }} />
      ))}
    </Card.Group>)
}


export default CardsContainer