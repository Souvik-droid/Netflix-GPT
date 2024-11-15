import React, { useEffect } from 'react'
import Header from './Header'
import { API_Options } from '../utils/constant';

const Browse = () => {

  const getPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
    const json = await data.json();
      console.log(json);
      // .then(res => res.json())
      // .then(res => console.log(res))
      // .catch(err => console.error(err));
  }
  useEffect(() => {
    getPlayingMovies();
  },[])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
