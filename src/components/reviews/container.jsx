import {Reviews} from "./component";
import {useSelector} from "react-redux";
import {selectRestaurantReviewId} from "../redux/features/entities/restaurant/selectors";


export const ReviewsContainer = ({restaurantId, className}) => {
    const reviewIds = useSelector(state =>
        selectRestaurantReviewId(state, restaurantId));
    return <Reviews reviewIds={reviewIds} className={className} />
};