// ACTIONS
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
const ADD_FAVORITE = 'ADD__FAVORITE';


export const incrementCounter = () => ({
    type: COUNTER_INCREMENT,
});
export const decrementCounter = () => ({
    type: COUNTER_DECREMENT,
});

export const addFavorite = (item) => {
    return {
        type: 'ADD__FAVORITE',
        payload: item
    }
}

export const deleteStock = (value) => {
    return {
        type: 'UPDATE__STOCK',
        stock: value
    }
}

/* const deleteItem = (dispatch, item) => {
    dispatch({
        type: ADD_FAVORITE,
        item: item
    });
}

module.exports = {
    deleteItem: deleteItem
}; */