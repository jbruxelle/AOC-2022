export interface RPCSolver {
  initialize(input: string, solution: string): void;
  getOutcomeScore(): number;
  getMoveScore(): number;
  getScore(): number;
}
