import SortBy from "../classes/SortBy";

const sortByList: SortBy[] = [];
sortByList.push(new SortBy("1", "Price: Low to High"));
sortByList.push(new SortBy("2", "Price: High to Low"));
sortByList.push(new SortBy("3", "Newest Arrivalsh"));

export { sortByList };
