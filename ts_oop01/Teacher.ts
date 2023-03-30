import { Person } from "./Person";
class Teacher extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitleId: number,
    ) {
        super(firstName, lastName);
    }
    public printTitle(): void {
        console.log(super.printName(), "Job Title Id: ", this.jobTitleId);
    }
}
const teacher1 = new Teacher("Phuong", "Nam", 12)
teacher1.printTitle()
