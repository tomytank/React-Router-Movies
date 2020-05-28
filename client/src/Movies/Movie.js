import React, { useState, useEffect, useRouteMatch, useParams } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log("state value of movie ",movie);
    console.log("Props, movie.js", props);
  useEffect(() => {
    let id= props.match.params.id;
    // const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
  // const {path, url} = useRouteMatch();  
    // console.log("id in movie.js, ",id)
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  // console.log("Movie after axios ",Movie);
  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
