import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { SELECT_CARS_BY_CATEGORY, SELECT_ALL_CARS, SORT_BY_PRICE_ASC, SORT_BY_PRICE_DESC, SORT_BY_DATE } from "../actions";
import { brandList } from "../models/brandList";
import { sortByList } from "../models/sortByList";

const SelectZone = () => {
    const { dispatch } = useContext(AppContext);
    const selectCar = (e: any) => {
        e.preventDefault();
        const category = e.target.value;
        if (category !== "Category") dispatch({ type: SELECT_CARS_BY_CATEGORY, category });
        else dispatch({ type: SELECT_ALL_CARS });
    };
    const sortCarList = (e: any) => {
        e.preventDefault();
        const sortType = e.target.value;
        if (sortType === "1") dispatch({ type: SORT_BY_PRICE_ASC });
        else if (sortType === "2") dispatch({ type: SORT_BY_PRICE_DESC });
        else dispatch({ type: SORT_BY_DATE });
    };
    return (
        <div className="d-flex">
            <div className="mx-2">
                <select className="form-select" aria-label="Default select example" onChange={selectCar} defaultValue="Category">
                    <option value="Category">Category</option>
                    {brandList.map((value, index) => (
                        <option key={index} value={value.getName()}>
                            {value.getName()}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-select" aria-label="Default select example" onChange={sortCarList} defaultValue="Sort-by">
                    <option value="Sort-by">Sort by:</option>
                    {sortByList.map((value, index) => (
                        <option key={index} value={value.getId()}>
                            {value.getName()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectZone;
