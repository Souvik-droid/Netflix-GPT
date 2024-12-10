import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailers : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularList : (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addtopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        }

    }
})

export const  { addNowPlayingMovies, addMovieTrailers, addPopularList, addtopRatedMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;