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


function printTeacher(teacher: Teacher, subject?: string): void {
  const fullName = `${teacher.firstName} ${teacher.lastName}`;
  if (subject) {
    console.log(`Teacher: ${fullName}, Subject: ${subject}`);
  } else {
    console.log(`Teacher: ${fullName}`);
  }
}
