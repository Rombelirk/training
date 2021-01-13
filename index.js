// Keep only numbers less than 3
const onlyLessThanThree = [1, 2, 3, 4, 5];
const withMoreThanFiveLetters = ["Table", "Fridge", "Winter", "Aplle"];
const onlyCompleted = [
  {
    task: "wash dishes",
    completed: false,
  },
  {
    task: "learn english",
    completed: true,
  },
  {
    task: "read a book",
    completed: true,
  },
];

const withLetterLInTheBeginningOfTheName = [
  {
    name: "Lena",
    age: 27,
  },
  {
    name: "Roma",
    age: 27,
  },
  {
    name: "Leonid",
    age: 28,
  },
];

const onlyNames = [
  {
    name: "Lena",
    age: 27,
  },
  {
    name: "Roma",
    age: 27,
  },
  {
    name: "Andrei",
    completed: 28,
  },
];

const fullNames = [
  {
    name: "Anna",
    lastame: "Petrova",
  },
  {
    name: "Oleg",
    lastame: "Ivanov",
  },
  {
    name: "Vasya",
    lastame: "Pupkin",
  },
];

// use method .sort()
const inAlphabetOrder = ["Betta", "Gamma", "Alfa"];

module.exports = {
  onlyLessThanThree,
  withMoreThanFiveLetters,
  onlyCompleted,
  withLetterLInTheBeginningOfTheName,
  onlyNames,
  fullNames,
  inAlphabetOrder,
};
