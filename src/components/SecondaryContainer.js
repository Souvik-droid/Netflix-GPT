import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log("before",movies)
  if(!movies) return;
  //console.log("aft",movies)
  
  return (
    <div className='bg-black pl-4'>
      <div className='-mt-48 relative z-20'><MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /></div>
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer
