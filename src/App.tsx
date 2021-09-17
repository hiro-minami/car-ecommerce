import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectZone from "./components/selectComponents/SelectZone";
import Card from "./components/cardComponents/Card";
import Nav from "./components/navComponents/Nav";
import { AppContext } from "./contexts/AppContext";

function App() {
    const { state, dispatch } = useContext(AppContext);
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
