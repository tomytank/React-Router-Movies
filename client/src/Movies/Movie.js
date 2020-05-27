import React, { useState, useEffect, useRouteMatch, useParams } from 'react';
import axios from 'axios';


const Movie = (props) => {
  const [movie, setMovie] = useState();
  // setMovie(props);
  console.log("state value of movie ",movie);
  // setMovie(props.id);
  // console.log("movie state value, movie.js", movie[id:2]);
  console.log("Props, movie.js", props);
  // const params = useParams();
  useEffect(() => {
    let id= props.match.params.id;
    // const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
  // const {path, url} = useRouteMatch();  
    // const id = props.movie.id;
    console.log("id in movie.js, ",id)


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

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
