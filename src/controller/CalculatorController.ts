import { Operator } from "../utils/Operator";
import { CalculatorModel } from "../model/CalculatorModel";
import { CalculatorView } from "../view/CalculatorView";

export class CalculatorController {
  private _calculatorModel = new CalculatorModel();
  private _calculatorView = new CalculatorView();

  public start() {
    while (true) {
      const operation = this._calculatorView.getUserInput();

      if (isFinite(operation.num1) && isFinite(operation.num2)) {
        // Means the numbers are really numbers
        const result = this.fetchResult(
          operation.num1,
          operation.num2,
          operation.operator
        );
        if (result !== undefined) {
          this._calculatorView.showResult(result);
        }
      } else {
        // Means the numbers are not numbers
        console.log("Os inputs devem ser números");
        continue;
      }
    }
  }

  fetchResult(a: number, b: number, operator: Operator) {
    switch (operator) {
      case Operator.ADD:
        return this._calculatorModel.add(a, b);
      case Operator.SUBTRACT:
        return this._calculatorModel.subtract(a, b);
      case Operator.DIVIDE:
        return this._calculatorModel.divide(a, b);
      case Operator.MULTIPLY:
        return this._calculatorModel.multiply(a, b);
      default:
        console.log("Operador inválido");
        return;
    }
  }
}
