var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

if (hora < 12 && hora >= 6) {
    console.log("Bom dia!")
}

else if (hora>=12 && hora<18) {
    console.log("Boa tarde!")
}

else {
    console.log("Boa noite!")
}

switch (dia) {
    case 0:
        console.log("Hoje é Domingo")
        break
    case 1:
        console.log("Hoje é Segunda")
        break
    case 2:
        console.log("Hoje é Terça")
        break
    case 3:
        console.log("Hoje é Quarta")
        break
    case 4:
        console.log("Hoje é Quinta")
        break
    case 5:
        console.log("Hoje é Sexta")
        break
    case 6:
        console.log("Hoje é Sabado")
        break
    default:
        console.log("Ops...")
        break
}

/*
0 - domingo
1 - segunda
2 - terça
...
6 - sabado
*/