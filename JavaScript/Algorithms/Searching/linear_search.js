function reverse_string(string) {
  // let i = 0;
  // let j = string.length - 1;

  // while(i <= j) {
  //   string[i] = string[j];
  //   string[j] = string[i];
  //   i++
  //   j--;
  // }r

  for (let i = 0, j = string.length - 1; i <= j; i++) {
    string[i] = string[j];
    string[j] = string[i];
    j--;
  }

  return string;
}

console.log(reverse_string(["h", "e", "l", "l", '0']));