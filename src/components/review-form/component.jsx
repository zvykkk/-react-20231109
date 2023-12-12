import React, {useReducer, useState} from "react";
import {Counter} from "../counter/component";
import classNames from "classnames";
import styles from "./styles.module.css"

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 0,
};

const RATING_STEP = 0.5;

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

export const ReviewForm = ({className}) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <form className={classNames(
            styles.root,
            className
        )}>
            <h2 className={styles.title}>Add a comment</h2>
            <div className={styles.container}>
                <div className={styles.containerElem}>
                    <label htmlFor="name" className={styles.label}>Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={formValue.name}
                        onChange={(event) =>
                            dispatch({type: 'setName', payload: event.target.value})
                        }
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerElem}>
                    <label htmlFor="text" className={styles.label}>Text:</label>
                    <textarea
                        id="text"
                        type="text"
                        value={formValue.text}
                        onChange={(event) =>
                            dispatch({type: 'setText', payload: event.target.value})
                        }
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerElem}>
                    <label htmlFor="rating" className={styles.label}>Rating:</label>
                    <Counter
                        value={formValue.rating}
                        increment={() =>
                            dispatch({type: 'setRating', payload: formValue.rating + RATING_STEP})
                        }
                        decrement={() =>
                            dispatch({type: 'setRating', payload: formValue.rating - RATING_STEP})
                        }
                    />
                </div>
            </div>
        </form>
    );
};