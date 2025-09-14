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


// Old function for full Teacher object
function printFullTeacher(teacher: Teacher, subject?: string): string {
  const fullName = `${teacher.firstName} ${teacher.lastName}`;
  const result = subject ? `Teacher: ${fullName}, Subject: ${subject}` : `Teacher: ${fullName}`;
  
  console.log(result); 
  return result;        
}


interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}


const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};


console.log(printTeacher("John", "Doe"));       

