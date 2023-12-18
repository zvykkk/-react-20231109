import {Menu} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantDishId} from "../redux/features/entities/restaurant/selectors";
import {useEffect} from "react";
import {getDishes} from "../redux/features/entities/dish/thunk/get-dishes";

export const MenuContainer = ({restaurantId, ...props}) => {
    const restaurantDishIds = useSelector((state) =>
        selectRestaurantDishId(state, restaurantId)
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId]);

    return <Menu {...props} dishIds={restaurantDishIds}/>
};