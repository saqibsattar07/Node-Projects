import { Person } from './Person.js';

export class Student extends Person {
    private studentId: string;

    constructor(name: string, age: number, studentId: string) {
        super(name, age);
        this.studentId = studentId;
    }

    getDetails(): string {
        return `${super.getDetails()}, Student ID: ${this.studentId}`;
    }
}
