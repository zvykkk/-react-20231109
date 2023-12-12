import {Button} from "../button/component";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../redux/features/entities/restaurant/selectors";

export const RestaurantTabContainer = ({restaurantId, onClick, className}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    return <Button onClick={onClick} children={restaurant.name} className={className}/>
  }
