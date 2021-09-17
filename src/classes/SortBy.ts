import Select from "./Select";

class SortBy implements Select {
    private sortId: string;
    private sortCategory: string;
    constructor(sortId: string, sortCategory: string) {
        this.sortId = sortId;
        this.sortCategory = sortCategory;
    }
    public getId(): string {
        return this.sortId;
    }
    public getName(): string {
        return this.sortCategory;
    }
}

export default SortBy;
