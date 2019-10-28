export const getALLCars = store => {
    return store.carR.cars.filter(car => car);
}

export const getItalianCars = store => {
    return store.carR.cars.filter(car => car.country === 'it');
}

export const getFrenchCars = store => {
    return store.carR.cars.filter(car => car.country === 'fr');
}

export const getGermanCars = store => {
    return store.carR.cars.filter(car => car.country === 'de');
}
    