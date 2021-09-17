import React, { createContext } from "react";
import Car from "../classes/Car";
import { carList } from "../models/carList";

type Context = {
    state: Car[];
    dispatch: React.Dispatch<any>;
};

export const AppContext = createContext<Context>({ state: carList, dispatch: () => {} });
