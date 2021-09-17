import { SELECT_CARS_BY_CATEGORY, SELECT_ALL_CARS, SORT_BY_PRICE_ASC, SORT_BY_PRICE_DESC, SORT_BY_DATE } from "../actions";
import Car from "../classes/Car";
import { carList } from "../models/carList";

const reducer = (state: Car[] = [], action: { type: string; category: string }) => {
    switch (action.type) {
        case SELECT_CARS_BY_CATEGORY:
            const newCarList = carList.filter((car) => car.getCategory() === action.category);
            return newCarList;
        case SELECT_ALL_CARS:
            return carList;
        case SORT_BY_PRICE_ASC:
            let sortAsc = [...state];
            return sortAsc.sort((a, b) => a.getPrice() - b.getPrice());
        case SORT_BY_PRICE_DESC:
            let sortDesc = [...state];
            return sortDesc.sort((a, b) => b.getPrice() - a.getPrice());
        case SORT_BY_DATE:
            let sortDate = [...state];
            return sortDate.sort((a, b) => parseInt(b.getDate().replaceAll("-", "")) - parseInt(a.getDate().replaceAll("-", "")));
        default:
            return state;
    }
};

export default reducer;
