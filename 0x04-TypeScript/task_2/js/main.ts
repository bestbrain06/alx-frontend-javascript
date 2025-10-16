interface Director {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface Teacher {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements Director {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements Teacher {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): string {
  if (typeof salary === "number" && salary < 500) {
    return "Teacher";
  } else {
    return "Director";
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
