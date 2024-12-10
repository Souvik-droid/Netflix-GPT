import { topRated_API_url, API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addtopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    //fetch popular movie list from api
    const getTopRated = async () => {

        const data = await fetch(topRated_API_url, API_Options);
        const json = await data.json();

        //putting the data in the store
        console.log("pop", json)
        dispatch(addtopRatedMovies(json.results));
    }
    useEffect(() => {
        getTopRated();
    },[]);
}

export default useTopRatedMovies;