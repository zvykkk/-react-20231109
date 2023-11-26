import React, {useReducer, useState} from "react";
import {Counter} from "../counter/component";

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: action.payload,
                text: DEFAULT_FORM_VALUE.text,
                rating: DEFAULT_FORM_VALUE.rating,
            };
        case 'setText':
            return { ...state, text: action.payload};
        case 'setRating':
            return { ...state, rating: action.payload};
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <form>
            <h2>Add a comment</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={formValue.name}
                    onChange={(event) =>
                        dispatch({type: 'setName', payload: event.target.value})
                    }
                />
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <textarea
                    id="text"
                    type="text"
                    value={formValue.text}
                    onChange={(event) =>
                        dispatch({type: 'setText', payload: event.target.value})
                    }
                />
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <Counter
                    value={formValue.rating}
                    increment={() =>
                        dispatch({type: 'setRating', payload: formValue.rating + 0.5})
                    }
                    decrement={() =>
                        dispatch({type: 'setRating', payload: formValue.rating - 0.5})
                    }
                />
            </div>
        </form>
    );
};