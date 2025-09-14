interface Teacher {
  readonly firstName: string;   
  readonly lastName: string;    
  fullTimeEmployee: boolean;    
  yearsOfExperience?: number;   
  location: string;            
  [key: string]: any;      
}

interface Director extends Teacher {
  numberOfReports: number;
}
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 


interface StudentConstructor {
  firstName: string;
  lastName: string;
}


interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass({ firstName: "Guillaume", lastName: "Salva" });
console.log(student.displayName()); 
console.log(student.workOnHomework()); 
