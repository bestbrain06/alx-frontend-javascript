// task_4/js/main.ts

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import CppClass = Subjects.Cpp;
import JavaClass = Subjects.Java;
import ReactClass = Subjects.React;
import TeacherInterface = Subjects.Teacher;


export const cpp = new CppClass();
export const java = new JavaClass();
export const react = new ReactClass();

export const cTeacher: TeacherInterface = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
