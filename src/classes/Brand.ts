import Select from "./Select";

class Brand implements Select {
    private brandId: string;
    private brandName: string;
    constructor(brandId: string, brandName: string) {
        this.brandId = brandId;
        this.brandName = brandName;
    }
    public getId(): string {
        return this.brandId;
    }
    public getName(): string {
        return this.brandName;
    }
}

export default Brand;
