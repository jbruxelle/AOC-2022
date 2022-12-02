import { possibleInputs, possibleSolutions } from "../constants.js";
import { RPCSolver } from "./types.js";

export class PartTwoRPCSolver implements RPCSolver {
  private _currentInput: number = 0;
  private _currentSolution: number = 0;

  public initialize(input: string, solution: string): void {
    this._currentInput = possibleInputs.indexOf(input);
    this._currentSolution = possibleSolutions.indexOf(solution);
  }

  public getScore(): number {
    const outcomeScore = this.getOutcomeScore();
    const moveScore = this.getMoveScore();
    return outcomeScore + moveScore;
  }

  public getMoveScore(): number {
    const solutionMove = this._getSolutionMove();
    return solutionMove + 1;
  }

  public getOutcomeScore(): number {
    if (this._currentSolution === 2) {
      return 6;
    } else if (this._currentSolution === 1) {
      return 3;
    }
    return 0;
  }

  private _getSolutionMove(): number {
    if (this._currentSolution === 0) {
      return this._currentInput === 0 ? 2 : this._currentInput - 1;
    }
    if (this._currentSolution === 2) {
      return this._currentInput === 2 ? 0 : this._currentInput + 1;
    }
    return this._currentInput;
  }
}
