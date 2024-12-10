import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularList from '../hooks/usePopularList';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularList();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {/**
        Main Container
          - Video Bacground
          - Video Title
        Secondary Container
          - MovieList * n
          - cards * n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
