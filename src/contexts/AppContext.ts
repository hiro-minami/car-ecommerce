import React, { createContext } from "react";
import { brandList } from "../models/brandList";
import { carList } from "../models/carList";
import { sortByList } from "../models/sortByList";

export const AppContext = createContext({ state: { brandList, carList, sortByList }, dispatch: () => {} });
