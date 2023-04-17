export class Contact {
    name = '';
    number = '';
    email = '';
    address = '';
    conected = false;

    constructor(name, number, email, address, conected) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.address = address;
        this.conected = conected;
    }
}