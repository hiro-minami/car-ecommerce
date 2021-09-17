import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const SelectZone = () => {
    const { state, dispatch } = useContext(AppContext);
    return (
        <div className="d-flex">
            <div className="mx-2">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Category</option>
                    {state.brandList.map((value, index) => (
                        <option key={index} value={value.getId()}>
                            {value.getName()}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Sort by:</option>
                    {state.sortByList.map((value, index) => (
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
