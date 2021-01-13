var {
  onlyLessThanThree,
  withMoreThanFiveLetters,
  onlyCompleted,
  withLetterLInTheBeginningOfTheName,
  onlyNames,
  fullNames,
  inAlphabetOrder,
} = require("./index");

describe("", () => {
  test("less than three", () => {
    expect(onlyLessThanThree.some((el) => el >= 3)).toBe(false);
  });
  test("More than 5 letters", () => {
    expect(withMoreThanFiveLetters).toEqual(["Fridge", "Winter"]);
  });
  test("Only completed", () => {
    expect(onlyCompleted).toEqual([
      {
        task: "learn english",
        completed: true,
      },
      {
        task: "read a book",
        completed: true,
      },
    ]);
  });
  test("With L in the beginning", () => {
    expect(withLetterLInTheBeginningOfTheName).toEqual([
      {
        name: "Lena",
        age: 27,
      },
      {
        name: "Leonid",
        age: 28,
      },
    ]);
  });
  test("Only names", () => {
    expect(onlyNames).toEqual(["Lena", "Roma", "Andrei"]);
  });

  test("Fullnames", () => {
    expect(fullNames).toEqual(["Anna Petrova", "Oleg Ivanov", "Vasya Pupkin"]);
  });
  test("Sort words", () => {
    expect(inAlphabetOrder).toEqual(["Alfa", "Betta", "Gamma"]);
  });
});
