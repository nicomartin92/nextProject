// ACTIONS
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const UPDATE__STOCK = 'UPDATE__STOCK';
const ADD__FAVORITE = 'ADD__FAVORITE';
const REMOVE__FAVORITE = 'REMOVE__FAVORITE';
const REMOVE__ALL__FAVORITE = 'REMOVE__ALL__FAVORITE';


export const incrementCounter = () => ({
    type: COUNTER_INCREMENT,
});

export const addFavorite = (item) => {
    return {
        type: ADD__FAVORITE,
        payload: item
    }
}

export const removeFavorite = (item) => {
    return {
        type: REMOVE__FAVORITE,
        payload: item
    }
}

export const removeAllFavorite = (item) => {
    return {
        type: REMOVE__ALL__FAVORITE,
        payload: item
    }
}

export const deleteStock = (value) => {
    return {
        type: UPDATE__STOCK,
        stock: value
    }
}