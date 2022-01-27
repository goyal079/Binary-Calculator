function decToBin(num) {
  if (Math.floor(num / 2) < 2) {
    return (num % 2) + "" + Math.floor(num / 2);
  } else {
    return (num % 2) + "" + binaray(Math.floor(num / 2));
  }
}
