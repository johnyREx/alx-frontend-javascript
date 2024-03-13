// Define teacher interface
interface Teacher {
  name: string;
  subject: string;
}

// Define the Directors interface extending to Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Direcectors = {
  name: "Johny Rex",
  subject: "Math",
  numberOfReports: 10
};

console.log(director);
