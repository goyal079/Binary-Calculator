//Primary Binary converters
function decToBin(num) {
  if (Math.floor(num / 2) < 2) {
    return (num % 2) + "" + Math.floor(num / 2);
  } else {
    return (num % 2) + "" + decToBin(Math.floor(num / 2));
  }
}

function binary(input) {
  if (isNaN(input)) {
    return "Try again with a valid decimal input";
  }
  let bin = decToBin(input);
  return bin.split("").reverse().join(""); // returns 8 bit binaries
}

//Primary Binary converters

// string
function stringToBinary(string) {
  if (isNaN(string)) {
    let x = string
      .split("")
      .map((char) => {
        return binary(char.charCodeAt(0)).padStart(8, 0);
      })
      .join("");
    return x;
  } else {
    return "Try using the other converters for numeric values";
  }
}

// octal
function octalToBinary(oct) {
  var x = oct.split("");

  if (isNaN(oct) || x.indexOf("8") != -1 || x.indexOf("9") != -1) {
    return "Invalid octal value";
  } else {
    let value = x
      .map((num) => {
        return binary(num).padStart(3, 0);
      })
      .join("");
    return Number(value);
  }
}
console.log(octalToBinary("9"));
export { binary, stringToBinary, octalToBinary };
