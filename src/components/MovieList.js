import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  console.log(title, movies)
  return (
    <div className="p-6">
      <h1 className="text-3xl py-4 font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))};
        </div>
      </div>
      
    </div>
  )
}

export default MovieList
