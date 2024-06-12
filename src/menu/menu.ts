import * as ReadLine from "readline-sync";
import { Calculator } from "../calculator/calculator";

export class Menu {
  private calc: Calculator;
  constructor() {
    this.calc = new Calculator();
  }

  showMenu(): void {
    let userAnswer = -1;

    while (userAnswer !== 0) {
      const op = ReadLine.question(`     
                   ------ FAÇA SUA OPERAÇÃO ------
            1 ) SOMA
            2 ) SUBTRAÇÃO
            3 ) MULTIPLICAÇÃO
            4 ) DIVISÃO
            0 ) SAIR
            `);

      switch (op) {
        case "1": {
          const firstNum = ReadLine.question(
            "Entre com o primeiro valor da soma:"
          );
          const secondNum = ReadLine.question(
            "Entre com o segundo valor da soma:"
          );
          const result = this.calc.add(Number(firstNum), Number(secondNum));
          console.log(result);
          break;
        }
        case "2": {
          const firstNum = ReadLine.question(
            "Entre com o primeiro valor da Subtração:"
          );
          const secondNum = ReadLine.question(
            "Entre com o segundo valor da Subtração:"
          );
          const result = this.calc.sub(Number(firstNum), Number(secondNum));
          console.log(result);
          break;
        }
        case "3": {
          const firstNum = ReadLine.question(
            "Entre com o primeiro valor da multiplicação:"
          );
          const secondNum = ReadLine.question(
            "Entre com o segundo valor da multiplicação:"
          );
          const result = this.calc.mult(Number(firstNum), Number(secondNum));
          console.log(result);
          break;
        }
        case "4": {
          const firstNum = ReadLine.question(
            "Entre com o primeiro valor da divisão:"
          );
          const secondNum = ReadLine.question(
            "Entre com o segundo valor da divisão:"
          );
          const result = this.calc.division(
            Number(firstNum),
            Number(secondNum)
          );
          console.log(result);
          break;
        }
        case "0": {
          console.log("ENCERRANDO ...");
          userAnswer = 0;
          break;
        }
        default: {
          console.log("ENTRADA INVÁLIDA!");
          break;
        }
      }
    }
  }
}
