class PurchaserM {
    id: number;
    officialName: string;
    city: string;
    address: string;
    province: string;
    zipCode: string;
    typeOfAccount: string

    constructor(id: number, officialName: string, city: string, address: string, province: string, zipCode: string, typeOfAccount: string){
        this.id = id;
        this. officialName = officialName;
        this.city = city;
        this.address = address;
        this.province = province;
        this.zipCode = zipCode;
        this.typeOfAccount = typeOfAccount;
    }
}

export default PurchaserM;