// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  console.log(fruits.join(""));
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let result = fruits.split(",");
  //   for (i = 0; i < fruits.length; i++) {
  //     result.push(fruits[i]);
  //   }
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  //   const result = array.sort(function (a, b) {
  //     return b - a;
  //   });
  const result = array.reverse();

  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   array.shift();
  //   array.shift();

  //   const result = array.splice(0, 2);
  //   console.log(result);
  //   console.log(array);

  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((item) => item.score === 90);

  console.log(result.name);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((item) => item.enrolled);

  for (i = 0; i < result.length; i++) {
    console.log(result[i].name);
  }
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((item) => item.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((item) => item.score < 50);
  console.log(result);

  const result2 = !students.every((item) => item.score >= 50);
  console.log(result2);
  console.log(!false);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    // console.log("-------------");
    // console.log(prev);
    // console.log(curr);

    prev += curr.score;
  }, 0);

  //   const result = students.reduceRight((prev, curr) => {
  //     console.log("-------------");
  //     console.log(prev);
  //     console.log(curr);

  //     return (prev += curr.score);
  //   }, 0);

  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((item) => item.score).join();
  //   const result = students.map((item) => item.score).filter((score) => score >= 50).join();

  console.log(result);
}
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((item) => item.score)
    .sort((prev, curr) => prev - curr)
    .join();

  console.log(result);
}
