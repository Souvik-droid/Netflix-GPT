import { useDispatch } from "react-redux"
import { API_Options, popular_API_url } from "../utils/constant";
import { useEffect } from "react";
import { addPopularList } from "../utils/movieSlice"

const usePopularList = () => {

    const dispatch = useDispatch();

    //fetch popular movie list from api
    const getPopularList = async () => {

        const data = await fetch(popular_API_url, API_Options);
        const json = await data.json();

        //putting the data in the store
        console.log("pop", json)
        dispatch(addPopularList(json.results));
    }
    useEffect(() => {
        getPopularList();
    },[]);
}

export default usePopularList;