import { upcoming_API_url, API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    //fetch popular movie list from api
    const getUpcomingMovies = async () => {

        const data = await fetch(upcoming_API_url, API_Options);
        const json = await data.json();

        //putting the data in the store
        console.log("pop", json)
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(() => {
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;