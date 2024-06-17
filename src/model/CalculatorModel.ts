export class CalculatorModel {
  public add(num1: number, num2: number) {
    return num1 + num2;
  }

  public subtract(num1: number, num2: number) {
    return num1 - num2;
  }

  public multiply(num1: number, num2: number) {
    return num1 * num2;
  }

  public divide(num1: number, num2: number) {
    if (num2 === 0) {
      console.log("Não é possível divisão por 0");
      return;
    }

    return num1 / num2;
  }
}
