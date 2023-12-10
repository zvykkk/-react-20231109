export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) =>
    selectRestaurantModule(state).entities[id];

export const selectRestaurantDishId = (state, id) =>
    selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewId = (state, id) =>
    selectRestaurantById(state, id)?.reviews;
