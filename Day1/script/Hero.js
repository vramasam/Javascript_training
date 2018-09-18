export class Hero {
    constructor(fn , ln) {
        this.fname = fn;
        this.lname = ln;
        this._secret = "secret";
    }

    fullName() {
        return this.fname + " " + this.lname;
    }

    get secret() {
        return this._secret;
    }

    set secret(val) {
        this._secret = val;
    }
}