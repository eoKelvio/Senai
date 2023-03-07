var vetor = [4,3,123,156,876,421,3,6,9,98,65,23,46,73,49,90,76,29,2,1,6,4,8,79,7,65]

console.log(pesquisar(333))

function pesquisar(n){
    let aux = [];

    for(let i=0;i<vetor.length;i++){
        if(vetor[i]==n)
            aux.push(i) 
    }

    if(aux.length==0)
        return `O número ${n} não foi encontrado`
    return `O número ${n} foi encontrado na(s) posição(ões) ${aux}`
}