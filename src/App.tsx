import React, { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectZone from "./components/SelectZone";
import Card from "./components/Card";
import Nav from "./components/Nav";
import { AppContext } from "./contexts/AppContext";
import reducer from "./reducers";
import { carList } from "./models/carList";

function App() {
    const [state, dispatch] = useReducer(reducer, carList);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Nav />
            <div className="container mt-5">
                <SelectZone />
                <Card />
            </div>
        </AppContext.Provider>
    );
}

export default App;
