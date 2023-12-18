import {Reviews} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantReviewId} from "../redux/features/entities/restaurant/selectors";
import {useEffect} from "react";
import {getReviews} from "../redux/features/entities/review/thunk/get-reviews";

export const ReviewsContainer = ({restaurantId, ...props}) => {

    const reviewIds = useSelector((state) =>
        selectRestaurantReviewId(state, restaurantId)
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviews(restaurantId));
    }, [dispatch, restaurantId]);

    return <Reviews {...props} reviewIds={reviewIds} />
};