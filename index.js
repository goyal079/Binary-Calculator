import { question } from "readline-sync";
import { binary, stringToBinary } from "./converters.js";

let response = question(
  "Select the type of data you want to convert to binary;\n0. Exit\n1. String\n2. Decimal \n3. Octal\n4. HexaDecimal: "
);

switch (response) {
  case "0":
    console.log("Exiting :(");
    break;
  case "1":
    let str = question("Enter string to convert to binary: ");
    console.log(`Here's your string in binary:\n${stringToBinary(str)}`);
    break;
  case "2":
    let dec = parseFloat(question("Enter decimal to convert to binary: "));
    console.log(`Here's the binary for your input decimal: ${binary(dec)}`);
    break;
  default:
    console.log("Try again with a valid input");
    break;
}
