import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'
import { useSelector } from 'react-redux';

const VideoBG = ({movie_id}) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieVideo(movie_id);

  return (
    <div className='w-screen'>
      <iframe 
        className='w-full aspect-video ' 
        src={"https://www.youtube.com/embed/"+ trailer?.key + "?autoplay=1&mute=1&showinfo=0&controls=0"} 
        title="VENOM: THE LAST DANCE - In Cinemas Oct 23" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>
    </div>
  )
}

export default VideoBG
