import { useEffect } from 'react'
import { API_Options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovieTrailers } from '../utils/movieSlice';

const useMovieVideo = (movie_id) => {

    const dispatch = useDispatch();

    const getMovieVideo = async() => {

        if(!movie_id) return;
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movie_id +'/videos?language=en-US', API_Options);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addMovieTrailers(trailer));
    }
    useEffect(() => {
        getMovieVideo();
    },[]);
}

export default useMovieVideo;
