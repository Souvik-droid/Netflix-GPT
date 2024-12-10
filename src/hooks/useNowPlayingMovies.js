import { API_Options, movie_API_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
  
    //fetching the data from api
    const getPlayingMovies = async() => {
      
      const data = await fetch(movie_API_url, API_Options)
      const json = await data.json();
      //console.log('getplay', json.results);
  
      //putting the data in the store
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => {
      getPlayingMovies();
    },[])

}

export default useNowPlayingMovies;
