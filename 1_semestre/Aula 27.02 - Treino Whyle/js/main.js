var n1 = 0;
var n2 = 0;
var i = 0;
var result = 0;
var resp = document.getElementById('result');
var btn = document.getElementById('btnCalcular');
btn.addEventListener('click',magia);

function magia(){
    n1 = Number.parseInt(document.getElementById('n1').value);
    n2 = Number.parseInt(document.getElementById('n2').value);
    
    if(n1>n2){
        i=n2
    }

    else if(n2>n1){
        i=n1
    }

    else{
        result = n1
    }

    while(i!=1){
        let dn1 = n1%i == 0
        let dn2 = n2%i == 0
        if(dn1==true && dn2 ==true){
            result = i
            break
        }
        i--
    }
    resp.innerText = result
}