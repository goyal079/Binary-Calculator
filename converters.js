//Primary Binary converters
function decToBin(num) {
  if (Math.floor(num / 2) < 2) {
    return (num % 2) + "" + Math.floor(num / 2);
  } else {
    return (num % 2) + "" + decToBin(Math.floor(num / 2));
  }
}

function binary(input) {
  let bin = decToBin(input);
  return bin.split("").reverse().join("").padStart(8, 0); // returns 8 bit binaries
}

//Primary Binary converters

// string
function stringToBinary(string) {
  if (isNaN(string)) {
    let x = string
      .split("")
      .map((char) => {
        return binary(char.charCodeAt(0));
      })
      .join("");
    return x;
  } else {
    return "Try using the other converters for numeric values";
  }
}

// octal
function octalToBinary(oct) {
  let x = oct.split("");
  let value;
  if (x.indexOf("8") != -1 || x.indexOf("8") != -1) {
    value = "Invalid octal value";
  } else {
    value = x
      .map((num) => {
        return binary(num);
      })
      .join("");
  }
  return value;
}
console.log(octalToBinary("20"));
export { binary, stringToBinary };
