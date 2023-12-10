import {Menu} from "./component";
import {useSelector} from "react-redux";
import {selectRestaurantDishId} from "../redux/features/entities/restaurant/selectors";

export const MenuContainer = ({restaurantId, ...props}) => {
    const restaurantDishIds = useSelector((state) =>
        selectRestaurantDishId(state, restaurantId)
    );
    return <Menu {...props} dishIds={restaurantDishIds}/>
};