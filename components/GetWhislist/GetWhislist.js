import React, {useState, useEffect } from 'react';

import firebase from '../../lib/db';

const GetWhislist = () => {

    const getData = () => {
        const [ brand, setBrand ] = useState([]);

        useEffect(() => {
            firebase
                .firestore()
                .collection('whislist')
                .onSnapshot((snapshot) => {
                    const newDatas = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setBrand(newDatas);
                })
        }, []);

        return brand;
    }

    const brand = getData();

    return (
        <div>
            <label> results</label>
            <ul>
                {brand.map((car) =>
                    <li key={car.id}>
                        <div>{car.name}</div>
                        <div>{car.brand}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default GetWhislist