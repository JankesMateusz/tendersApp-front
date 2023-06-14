class PersonOfContactM {
    id: number;
    personOfContactFirstName: string | null;
    personOfContactLastName: string | null;
    email: string;
    email2: string | null;
    phoneNumber: string;
    fax: string | null;

    constructor(id: number, firstName: string, lastName: string, email: string, email2: string, phoneNumber: string, fax: string) {
        this.id = id,
        this.personOfContactFirstName = firstName,
        this.personOfContactLastName = lastName,
        this.email = email,
        this.email2 = email2,
        this.phoneNumber = phoneNumber,
        this.fax = fax;
    }
}

export default PersonOfContactM;