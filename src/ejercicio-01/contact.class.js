export class Contact {
    first = '';
    last = '';
    email = '';
    status = false;

    constructor(first, last, email, status) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.status = status;
    }
}