import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'
import { useSelector } from 'react-redux';

const VideoBG = ({movie_id}) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideo(movie_id);
  console.log('trailer',trailer)

  useMovieVideo();
  return (
    <div>
      <iframe 
        width="640" 
        height="360" 
        src={"https://www.youtube.com/embed/"+ trailer?.key} 
        title="VENOM: THE LAST DANCE - In Cinemas Oct 23" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        
        >
      </iframe>
    </div>
  )
}

export default VideoBG
