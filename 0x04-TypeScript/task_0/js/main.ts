interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "London"
};


const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";

const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
header1.textContent = "First Name";
const header2 = headerRow.insertCell();
header2.textContent = "Location";


studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});