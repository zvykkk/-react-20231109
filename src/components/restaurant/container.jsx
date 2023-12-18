import {Restaurant} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantById} from "../redux/features/entities/restaurant/selectors";
import {useEffect} from "react";
import {getUsers} from "../redux/features/entities/user/thunk/get-users";

export const RestaurantContainer = ({restaurantId}) => {

    const dispatch = useDispatch();
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    )

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    return <Restaurant restaurant={restaurant}/>
 }