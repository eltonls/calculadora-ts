import * as ReadLine from "readline-sync"
import {Calculator} from "./calculator"


export class Menu{
    private calc :Calculator
    constructor(){
        this.calc = new Calculator()
    }
    
    showMenu():void {
        let act: boolean = true
        while (act){
            const op = ReadLine.question(`     
                   ------ FAÇA SUA OPERAÇÃO ------
            1 ) SOMA
            2 ) SUBTRAÇÃO
            3 ) MULTIPLICAÇÃO
            4 ) DIVISÃO
            0 ) SAIR
            `)

            switch(op) { 
                case '1': { 
                    const a = ReadLine.question("Entre com o primeiro valor da soma:")
                    const b = ReadLine.question("Entre com o segundo valor da soma:")
                    const result = this.calc.add(Number(a),Number(b))
                    console.log(result);
                    
                   break; 
                } 
                case '2': { 
                    const a = ReadLine.question("Entre com o primeiro valor da multiplicação:")
                    const b = ReadLine.question("Entre com o segundo valor da multiplicação:")
                    const result = this.calc.sub(Number(a),Number(b))
                    console.log(result);
                   break; 
                } 
                case '3': { 
                    const a = ReadLine.question("Entre com o primeiro valor da divisão:")
                    const b = ReadLine.question("Entre com o segundo valor da divisão:")
                    const result = this.calc.mult(Number(a),Number(b))
                    console.log(result);
                    break; 
                 } 
                 case '4': { 
                    const a = ReadLine.question("Entre com o primeiro valor da subtração:")
                    const b = ReadLine.question("Entre com o segundo valor da subtração:")
                    const result = this.calc.division(Number(a),Number(b))
                    console.log(result);
                    break; 
                 }
                 case '0':{
                    console.log("ENCERRANDO ...");

                    act = false

                    break

                 } 
                default: { 
                   console.log("ENTRADA INVÁLIDA!");
                    
                   break; 
                } 
             } 
        }
        
    }
}