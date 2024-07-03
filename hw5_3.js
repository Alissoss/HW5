function findGCD(a,b){
a = Math.abs(a);
b = Math.abs(b);
while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}
console.log(findGCD(103, 55));
//Через алгоритм Евкліда
