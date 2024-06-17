import { MenuOperationData } from "./MenuOperationData";

export interface MenuData {
  calculator_menu: {
    operations: MenuOperationData[];
    input_prompts: {
      two_numbers: {
        prompt_1: string;
        prompt_2: string;
      };
      one_number: {
        prompt: string;
      };
    };
  };
}
