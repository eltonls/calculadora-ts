import { Menu } from "./calculator/menu";

class Main {
    private m1: Menu

    constructor() {
        this.m1 = new Menu();
    }

    public main() {
       this.m1.showMenu();
    }
}

const main = new Main();

main.main();