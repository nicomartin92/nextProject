// GET with filter 

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

export const get1by18 = store => {
    return store.carR.cars.filter(car => car.size === '1/18');
}

export const get1by12 = store => {
    return store.carR.cars.filter(car => car.size === '1/12');
}

export const getSold = store => {
    return store.carR.cars.filter(car => car.sold);
}

export const getAvailable = store => {
    return store.carR.cars.filter(car => car.available);
}

export const getKeep = store => {
    return store.carR.cars.filter(car => car.keep);
}
    