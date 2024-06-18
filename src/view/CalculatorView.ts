import * as Readline from "readline-sync";
import { Operation } from "../utils/Operation";
import { Operator } from "../utils/Operator";
import * as fs from "fs";
import * as path from "path";
import { MenuOperationData } from "../utils/MenuOperationData";

export class CalculatorView {
  private _menuViewConfig;

  constructor() {
    this._menuViewConfig = this.loadMenuData();
  }

  public getUserInput(): Operation {
    let operationInput: string;
    let operator: Operator;
    let num1: number;
    let num2: number;

    while (true) {
      try {
        this.displayMenu();

        operationInput = Readline.question("Escolha uma operação: ");
        operator = this.getOperator(operationInput);

        num1 = Readline.questionFloat(
          this._menuViewConfig.calculator_menu.input_prompts.two_numbers
            .prompt_1
        );
        num2 = Readline.questionFloat(
          this._menuViewConfig.calculator_menu.input_prompts.two_numbers
            .prompt_2
        );

        return { operator: operator, num1, num2 };
      } catch (err) {
        console.error(err);
        console.log("por favor, tente novamente");
      }
    }
  }

  public showResult(result: number) {
    console.log(`O resultado é: ${result}`);
  }

  private getOperator(input: string) {
    switch (input) {
      case "1":
        return Operator.ADD;
      case "2":
        return Operator.SUBTRACT;
      case "3":
        return Operator.MULTIPLY;
      case "4":
        return Operator.DIVIDE;
      default:
        throw "Operação inválida";
    }
  }

  private loadMenuData() {
    const menuJsonPath = path.resolve(__dirname, "../assets/menu.json");
    try {
      const menuData = fs.readFileSync(menuJsonPath, "utf8");
      return JSON.parse(menuData);
    } catch (err) {
      console.error("Erro ao carregar menu", err);
      return [];
    }
  }

  private displayMenu() {
    console.log("=============================================");
    this._menuViewConfig.calculator_menu.operations.forEach(
      (item: MenuOperationData, index: number) => {
        console.log(
          `${index + 1}. ${item.name} (${item.symbol}) - ${item.description}`
        );
      }
    );
  }
}
