import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          // console.log(movieList);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
// console.log(movieList);
  return (
    <Router>
    <div>
      <SavedList list={savedList} />
      
      <Switch>
        <Route exact path="/" >
          <MovieList key={movieList.id} movies={movieList}/>
        </Route>
        <Route path="/movies/:id">
          <Movie key={movieList.id} movie={movieList} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default App;
