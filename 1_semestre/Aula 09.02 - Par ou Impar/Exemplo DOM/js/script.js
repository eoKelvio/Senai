/*var p=window.document.getElementsByTagName('p')[1]
window.document.write(p.innerHTML)*/

/*var p = window.document.getElementById('p1')
window.document.write(p.innerHTML)

window.alert(typeof (p))*/

/*var p=window.document.querySelectorAll('p.p1')[0]
window.document.write(p.innerText)*/

var box=window.document.getElementById("cm")
box.addEventListener("mouseenter",entrar)
box.addEventListener("mouseout",box)
box.addEventListener("click",clicar)

function entrar(){
    box.style.background="yellow"
}

function sair(){
    box.style.background="green"
    box.innerText="Clique em Mim"
}

function clicar(){
    box.innerText="clicou"
}
