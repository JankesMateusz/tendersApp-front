class PersonOfContactM {
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string;
    email2: string | null;
    phoneNumber: string;
    fax: string | null;

    constructor(id: number, firstName: string, lastName: string, email: string, email2: string, phoneNumber: string, fax: string) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.email2 = email2,
        this.phoneNumber = phoneNumber,
        this.fax = fax;
    }
}

export default PersonOfContactM;