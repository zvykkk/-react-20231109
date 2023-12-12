import {Dish} from "./component";
import {useSelector} from "react-redux";
import {selectDishById} from "../redux/features/entities/dish/selectors";

export const DishContainer = ({dishId, ...props}) => {
    const dish = useSelector((state) =>
        selectDishById(state, dishId)
    )
    return <Dish {...props} dish={dish}/>
}