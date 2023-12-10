import {Review} from "./component";
import {useSelector} from "react-redux";
import {selectReviewById} from "../redux/features/entities/review/selectors";

export const ReviewContainer = ({reviewId, ...props}) => {
    const review = useSelector((state) =>
        selectReviewById(state, reviewId)
    );
    return <Review {...props} text={review.text}/>
};