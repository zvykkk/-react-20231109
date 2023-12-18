import {RestaurantsPage} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRestaurants} from "../../components/redux/features/entities/restaurant/thunk/get-restaurants";
import {selectRestaurantLoadingStatus} from "../../components/redux/features/entities/restaurant/selectors";

export const RestaurantsPageContainer = () => {

    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectRestaurantLoadingStatus);

    useEffect( () => {
        dispatch(getRestaurants());
    }, []);


    if (loadingStatus === "pending") {
        return 'loading';
    }

    return <RestaurantsPage/>;
}