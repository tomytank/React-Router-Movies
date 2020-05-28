import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import MovieCard from './MovieCard';


const Movie = (props) => {
  const params = useParams();
  let id = Number(params.id);
  console.log("movie.js params, ",params);
  console.log("Movie.js props, ", props);
  console.log("Movie.js props.savedList, ", props.savedList);
  const [movie, setMovie] = useState();
  useEffect(() => {
    
    // let id= props.match.params.id;
    // const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  // console.log("Movie after axios ",Movie);
  // const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
