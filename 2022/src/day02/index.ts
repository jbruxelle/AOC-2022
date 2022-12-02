import run from "aocrunner";
import { PartOneRPCSolver } from "./rock-paper-cissors/part-1.js";
import { PartTwoRPCSolver } from "./rock-paper-cissors/part-2.js";

const parseInput = (input: string) => {
  return input.split("\n").map((line) => line.split(" "));
};

const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  const rpcSolver = new PartOneRPCSolver();
  let totalScore = 0;
  for (let i = 0; i < parsedInput.length; i++) {
    const [input, solution] = parsedInput[i];
    rpcSolver.initialize(input, solution);
    const score = rpcSolver.getScore();
    totalScore += score;
  }
  return totalScore;
};

const part2 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  const rpcSolver = new PartTwoRPCSolver();
  let totalScore = 0;
  for (let i = 0; i < parsedInput.length; i++) {
    const [input, solution] = parsedInput[i];
    rpcSolver.initialize(input, solution);
    const score = rpcSolver.getScore();
    totalScore += score;
  }
  return totalScore;
};

run({
  part1: {
    tests: [
      {
        input: `
            A Y
            B X
            C Z
        `,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
            A Y
            B X
            C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
