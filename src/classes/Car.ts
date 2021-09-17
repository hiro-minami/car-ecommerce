class Car {
    private id: string;
    private name: string;
    private category: string;
    private price: number;
    private date: string;
    private picPath: string;
    constructor(id: string, name: string, category: string, price: number, date: string, picPath: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.date = date;
        this.picPath = picPath;
    }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getCategory(): string {
        return this.category;
    }
    public getPrice(): number {
        return this.price;
    }
    public getDate(): string {
        return this.date;
    }
    public getPicPath(): string {
        return this.picPath;
    }
}

export default Car;
