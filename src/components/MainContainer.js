import VideoTitle from './VideoTitle'
import VideoBG from './VideoBG'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if(!movies) return;

  const mainMovie = movies[0];
  //console.log("main",mainMovie)
  const { title, overview, id } = mainMovie;
  //const { poster_path, backdrop_path } = mainMovie;
  //console.log(title, overview, id)

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBG movie_id={id}/>
    </div>
    )
}

export default MainContainer

