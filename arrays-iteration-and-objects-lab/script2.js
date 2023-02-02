// Objects

// Create an object

// e.g.
const student1 = {
  grade: 11,
  fname: "Riko",
  studentID: "24SM09UW",
};

// CRUD operations for an object

// Access properties of a nested object // probably a student with classes, each with a teacher, each with a name.

// e.g.

const student2 = {
  grade: 11,
  fname: "Riko",
  studentID: "24SM09UW",
  english: {
    className: "American Literature",
    room: 409,
    teacher: {
      name: "Ms. Hsu",
      yearsExperience: 5,
      otherClasses: ["Intro to Photography", "Advanced Photography"],
    },
  },
  math: {
    className: "Precalculus",
    room: 101,
    teacher: {
      name: "Mrs. King",
      yearsExperience: 22,
      otherClasses: ["Algebra II"],
    },
  },
  science: {
    className: "Physics",
    room: 205,
    teacher: {
      name: "Mr. Ramirez",
      yearsExperience: 7,
      otherClasses: ["Chemistry", "Choir"],
    },
  },
};

