import { question } from "readline-sync";
import { binary } from "./converters.js";

// let response = question(
//   "Select the type of data you want to convert to binary;\n0. Exit\n1. String\n2. Decimal \n3. Octal\n4. HexaDecimal: "
// );

// switch (response) {
//   case "0":
//     console.log("Exiting :(");
//     break;
// }
console.log(binary(17));
