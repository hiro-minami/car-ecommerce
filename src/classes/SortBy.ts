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
    public setId(newId: string): void {
        this.sortId = newId;
    }
    public setName(newCategory: string): void {
        this.sortCategory = newCategory;
    }
}

export default SortBy;
