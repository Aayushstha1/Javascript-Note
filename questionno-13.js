const students = [
    { name: "Aayush", age: 20 },
    { name: "Sam", age: 22 },
    { name: "Sita", age: 21 }
  ];
  
  const studentAges = students.map(student => student.age);
  
  console.log(studentAges);