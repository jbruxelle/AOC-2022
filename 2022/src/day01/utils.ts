const sum = (a: number, b: number) => a + b;
export const arraySum = (array: number[]) => array.reduce(sum, 0);
