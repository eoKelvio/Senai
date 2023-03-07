var n = [3,6,1,7,9,4,2];
var aux

for(var i=0;i<n.length;i++){
    for(var j=0; j<n.length-1; j++){
      if (n[j] > n[j+1]){
        aux = n[j]
        n[j] = n[j+1]
        n[j+1] = aux
      }
    }
  
}
console.log(n)