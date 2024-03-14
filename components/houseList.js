import React from "react"; 
import HouseRow from "./houseRow";
import { useState } from "react";

const houseArray = [
    {
        id: 1,
        address: "11 Kings of Valley, Beth",
        country: "France",
        price: 900000,
    },
    {
        id: 2,
        address: "85 Road of Kings, Bern",
        country: "France",
        price: 600000,
    },
];
  

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);
    const [counter, setCounter] = useState(0);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "Valley Way, New York",
                country: "USA",
                price: 1000000, 
            },
        ]);
    };
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => ( 
                    <HouseRow key={h.id} house={h} />))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;