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
        src={"https://www.youtube.com/embed/" + trailer?.key +"?autoplay=1&loop=1&mute=1&showinfo=0&controls=0loop=1&playlist=" + trailer?.key} 
        title="VENOM: THE LAST DANCE - In Cinemas Oct 23" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>
    </div>
  )
}

export default VideoBG

//<iframe width="640" height="360" src="https://www.youtube.com/embed/_MnOG-sHz4U" title="Myth of Man - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>