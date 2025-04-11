/*
მოცემულია სტუდენტების მასივი მათი ნიშნებით, განახორციელეთ შემდეგი ფუნქციები:

1. getSubjectsStatistics(students)
   - გამოთვალეთ თითოეული სტუდენტის საშუალო ქულა
   - დააბრუნეთ ობიექტი, რომელსაც ექნება გასაღები "name" და "avarge"
   - [{name: "John Doe", avarage: 85}]

2. getHighAchievers(students, gradeThreshold)
   - გაფილტრეთ სტუდენტები, რომელთა საშუალო ქულა აღემატება მოცემულ ზღვარს
   - დააბრუნეთ სტუდენტების სახელები და გვარები ერთიან სტრიქონად: ["George Smith", "Anna Johnson", ...]

3. getMultiAchivers(students, threshold)
   - იპოვეთ სტუდენტები, რომლებსაც აქვთ მაღალი ქულები (> threshold) მინიმუმ ორ საგანში
   - დააბრუნეთ მასივი ობიექტებით, სადაც მითითებულია სტუდენტის სახელი და aმ საგნების რაოდენობა,
     რომლებშიც მას აქვს threshold-ზე მეტი ქულა
   - მაგ: [{name: "Anna Johnson", expertSubjects: 2}, {name: "Benjamin Harris", expertSubjects: 3}]


მოთხოვნები:
- გამოიყენეთ მასივის მეთოდები (map, filter, reduce და ა.შ.)
- არ შეცვალოთ ორიგინალი მონაცემები
- დააბრუნეთ ახალი მონაცემები ყველა ფუნქციისთვის
*/

const students = [
  {
    firstName: "George",
    lastName: "Smith",
    grades: {
      math: 85,
      history: 92,
      physics: 78,
    },
  },
  {
    firstName: "Anna",
    lastName: "Johnson",
    grades: {
      math: 91,
      history: 84,
      physics: 90,
    },
  },
  {
    firstName: "Nick",
    lastName: "Williams",
    grades: {
      math: 72,
      history: 81,
      physics: 65,
    },
  },
  {
    firstName: "Mary",
    lastName: "Brown",
    grades: {
      math: 95,
      history: 88,
      physics: 93,
    },
  },
  {
    firstName: "David",
    lastName: "Miller",
    grades: {
      math: 78,
      history: 85,
      physics: 71,
    },
  },
  {
    firstName: "Emma",
    lastName: "Davis",
    grades: {
      math: 89,
      history: 92,
      physics: 84,
    },
  },
  {
    firstName: "Michael",
    lastName: "Wilson",
    grades: {
      math: 62,
      history: 71,
      physics: 68,
    },
  },
  {
    firstName: "Olivia",
    lastName: "Taylor",
    grades: {
      math: 93,
      history: 89,
      physics: 91,
    },
  },
  {
    firstName: "James",
    lastName: "Anderson",
    grades: {
      math: 75,
      history: 80,
      physics: 73,
    },
  },
  {
    firstName: "Sophia",
    lastName: "Thomas",
    grades: {
      math: 88,
      history: 91,
      physics: 86,
    },
  },
  {
    firstName: "William",
    lastName: "Jackson",
    grades: {
      math: 77,
      history: 68,
      physics: 74,
    },
  },
  {
    firstName: "Ava",
    lastName: "White",
    grades: {
      math: 83,
      history: 87,
      physics: 79,
    },
  },
  {
    firstName: "Benjamin",
    lastName: "Harris",
    grades: {
      math: 97,
      history: 94,
      physics: 95,
    },
  },
  {
    firstName: "Charlotte",
    lastName: "Martin",
    grades: {
      math: 84,
      history: 81,
      physics: 88,
    },
  },
  {
    firstName: "Daniel",
    lastName: "Thompson",
    grades: {
      math: 76,
      history: 73,
      physics: 82,
    },
  },
];

function getSubjectsStatistics(students) {
  // თქვენი კოდი აქ
}

function getHighAchievers(students, gradeThreshold) {
  // თქვენი კოდი აქ
}

function getMultiAchivers(students, threshold) {
  // თქვენი კოდი აქ
}

// ტესტები
console.log(getSubjectsStatistics(students));

console.log(getHighAchievers(students, 85));

console.log(getMultiAchivers(students, 80));
