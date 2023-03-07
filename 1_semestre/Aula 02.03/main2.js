let n1 = [3,4,1,5,9];
let aux;

for(let i=0;i<(n1.length-1)/2;i++){
  aux = n1[n1.length-1-i]
  n1[n1.length-1-i] = n1[i]
  n1[i] = aux
}
console.log(n1)      