import { possibleInputs, possibleSolutions } from "../constants.js";
import { RPCSolver } from "./types.js";

export class PartOneRPCSolver implements RPCSolver {
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
    return this._currentSolution + 1;
  }

  public getOutcomeScore(): number {
    if (this._currentSolution - this._currentInput === 0) {
      return 3;
    } else if (this._currentSolution - this._currentInput === 1) {
      return 6;
    }
    return 0;
  }
}
