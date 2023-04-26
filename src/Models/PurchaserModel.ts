class PurchaserM {
    id: number;
    officialName: string;
    city: string;
    address: string;
    province: string;
    zipCode: string;

    constructor(id: number, officialName: string, city: string, address: string, province: string, zipCode: string){
        this.id = id;
        this. officialName = officialName;
        this.city = city;
        this.address = address;
        this.province = province;
        this.zipCode = zipCode;
    }
}

export default PurchaserM;