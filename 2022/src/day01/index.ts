import run from "aocrunner";
import { arraySum } from "./utils.js";

const parseCalories = (rawCaloriesInput: string): number[][] => {
  const rawCaloriesGroups: string[] = rawCaloriesInput.split("\n\n");
  const caloriesGroups = rawCaloriesGroups.map(parseCaloriesGroups);
  return caloriesGroups;
};

const parseCaloriesGroups = (rawCaloriesGroup: string) => {
  return rawCaloriesGroup.split("\n").map((rawCalories) => +rawCalories);
};

const part1 = (rawInput: string) => {
  const calories: number[][] = parseCalories(rawInput);
  const totalCaloriesByElf: number[] = calories.map(arraySum);
  const maximumElfCalories = Math.max(...totalCaloriesByElf);
  return maximumElfCalories;
};

const part2 = (rawInput: string) => {
  const calories: number[][] = parseCalories(rawInput);
  const totalCaloriesByElf: number[] = calories.map(arraySum);
  const sortedTotalCaloriesByElf = totalCaloriesByElf.sort((a, b) => a - b);
  const topThreeElvesTotalCalories = sortedTotalCaloriesByElf.slice(-3);
  const topThreeElvesTotalCaloriesSum = arraySum(topThreeElvesTotalCalories);
  return topThreeElvesTotalCaloriesSum;
};

run({
  part1: {
    tests: [
      {
        input: `
          1000
          
          5000
          3000
          
          2000
          1000
          7000

          8000
          5000
          6000
          4000
        `,
        expected: 23000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          1000
          
          5000
          3000
          
          2000
          1000
          7000

          8000
          5000
          6000
          4000
        `,
        expected: 41000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
