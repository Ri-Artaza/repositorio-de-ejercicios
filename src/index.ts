let numeros: number = 1;
let numeroshasta100 = 0;

while (numeros <= 100) {
  numeroshasta100 = numeros;
  if (numeroshasta100 % 2 === 0 || numeroshasta100 % 3 === 0)
    console.log("los multiplos son" + numeroshasta100);
  numeros++;
}
