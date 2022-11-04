type Operation = (x: number, y: number, operation: string) => number | null;

export const operation: Operation = (x, y, operation) => {
  switch (operation) {
    case "addition":
      return x + y;
    case "subtraction":
      return x - y;
    case "division":
      return x / y;
    case "multiplication":
      return x * y;
    default:
      return null;
  }
};
