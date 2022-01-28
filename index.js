import { question } from "readline-sync";
import {
  binary,
  stringToBinary,
  octalToBinary,
  hexToBinary,
} from "./converters.js";

let response = question(
  "Select the type of data you want to convert to binary;\n0. Exit\n1. String\n2. Decimal \n3. Octal\n4. HexaDecimal: "
);

switch (response) {
  case "0":
    console.log("Exiting :(");
    break;
  case "1":
    let str = question("Enter string to convert to binary: ");
    console.log(`Here's your output:\n${stringToBinary(str)}`);
    break;
  case "2":
    let dec = question("Enter decimal to convert to binary: ");
    console.log(`Here's your output: ${binary(dec)}`);
    break;
  case "3":
    let oct = question("Enter octal to convert to binary: ");
    console.log(`Here's your output: ${octalToBinary(oct)}`);
    break;
  case "4":
    let hex = question("Enter Hexa-Decimal to convert to binary: ");
    console.log(`Here's your output: ${hexToBinary(hex)}`);
    break;
  default:
    console.log("Try again with a valid input");
    break;
}
