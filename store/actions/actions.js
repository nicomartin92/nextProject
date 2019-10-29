// ACTIONS
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const UPDATE__STOCK = 'UPDATE__STOCK';
const ADD_FAVORITE = 'ADD__FAVORITE';


export const incrementCounter = () => ({
    type: COUNTER_INCREMENT,
});

export const addFavorite = (item) => {
    return {
        type: ADD_FAVORITE,
        payload: item
    }
}

export const deleteStock = (value) => {
    return {
        type: UPDATE__STOCK,
        stock: value
    }
}