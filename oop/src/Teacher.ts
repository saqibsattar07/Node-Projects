import { Person } from './Person.js';

export class Teacher extends Person {
    private subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    getDetails(): string {
        return `${super.getDetails()}, Subject: ${this.subject}`;
    }
}
