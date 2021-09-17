import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Card = () => {
    const { state } = useContext(AppContext);
    return (
        <div className="d-flex flex-wrap pt-4">
            {state.carList.map((value, index) => (
                <div key={index} className="card m-2 col-12 col-md-5 col-lg-3 col-xl-2">
                    <div className="card-body">
                        <img src={value.getPicPath()} className="card-img-top" alt="..." />
                        <h5 className="card-title pt-2">{value.getName()}</h5>
                        <p className="card-text">Category: {value.getCategory()}</p>
                        <p className="card-text">Price: ${value.getPrice()}</p>
                        <p className="card-text">Date: {value.getDate()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
