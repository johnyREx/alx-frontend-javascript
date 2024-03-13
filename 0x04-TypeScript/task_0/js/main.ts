// Define theStudent interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two Students
const student1: student = {
  firstName: "Johny",
  lastName: "Rex",
  age: 22,
  location: "Italy"
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Barcelona"
};

// Array containing the two students
const studentList: Student[] = [student1, student2];

// function to render the table
function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  students.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// render the table
renderTable(studentList);
