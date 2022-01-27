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
function stringToBinary(string) {
  let x = string
    .split("")
    .map((char) => {
      return binary(char.charCodeAt(0));
    })
    .join("");
  return x;
}
export { binary, stringToBinary };
