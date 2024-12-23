import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularList from '../hooks/usePopularList';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularList();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header/>
      { showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
        )
      }
      
    </div>
  )
}

export default Browse
