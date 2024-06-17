import { CalculatorController } from "./controller/CalculatorController";

class Main {
  private CalculatorController = new CalculatorController();

  public start() {
    this.CalculatorController.start();
  }
}

const main = new Main();
main.start();
