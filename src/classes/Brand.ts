import Select from "./Select";

class Brand implements Select {
    private brandId: string;
    private brandName: string;
    constructor(brandId: string, brandName: string) {
        this.brandId = brandId;
        this.brandName = brandName;
    }
    // getter
    public getId(): string {
        return this.brandId;
    }
    public getName(): string {
        return this.brandName;
    }
    // setter
    public setId(newId: string): void {
        this.brandId = newId;
    }
    public setName(newName: string): void {
        this.brandName = newName;
    }
}

export default Brand;
