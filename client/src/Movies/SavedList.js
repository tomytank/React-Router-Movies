import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">
        {
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }} >
        {movie.title}
        </Link>}</span>
    ))}
    <Link to={'/'} style={{ textDecoration: 'none' }}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
