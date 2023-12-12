import {RestaurantTabs} from "./component";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../redux/features/entities/restaurant/selectors"

export const RestaurantTabsContainer = ({onTabClick}) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    return <RestaurantTabs restaurantIds={restaurantIds} onTabClick={onTabClick}/>
}