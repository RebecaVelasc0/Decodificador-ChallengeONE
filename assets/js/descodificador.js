function exibirTextoNaTela(elemento, texto){
    let campo = document.getElementById(elemento);
    campo.innerHTML = texto;
}

document.addEventListener('DOMContentLoaded', function () {
    exibirTextoNaTela('resultado__h2', 'Nenhuma mensagem encontrada, digite algo &#128515');
});

function criptografar(){
    let palavra = document.getElementById('inputprincipal').value;
    let palavraCriptografada = '';
    for(x = 0; x < palavra.length; x++){
        let letra = palavra[x];
        if (letra == 'a'){
            letra = 'ai';
        } else if(letra == 'e'){
            letra = 'enter';
        } else if(letra == 'i'){
            letra = 'imes';
        } else if(letra == '0'){
            letra = 'ober';
        } else if(letra == 'u'){
            letra = 'ufar';
        } else{
            letra = letra;
        };
        palavraCriptografada += letra;
    }
    exibirTextoNaTela('resultado__h2', palavraCriptografada);
    console.log(palavraCriptografada);
}

function descriptografar() {
    let palavraCriptografada = document.getElementById('inputprincipal').value;
    let palavraOriginal = '';

    for (let x = 0; x < palavraCriptografada.length; x++) {
        let letraCriptografada = palavraCriptografada[x];

        switch (letraCriptografada) {
            case 'a':
                if (palavraCriptografada.slice(x, x + 2) === 'ai') {
                    palavraOriginal += 'a';
                    x++;  
                } else {
                    palavraOriginal += letraCriptografada;
                }
                break;
            case 'e':
                if (palavraCriptografada.slice(x, x + 5) === 'enter') {
                    palavraOriginal += 'e';
                    x += 4; 
                } else {
                    palavraOriginal += letraCriptografada;
                }
                break;
            case 'i':
                if (palavraCriptografada.slice(x, x + 4) === 'imes') {
                    palavraOriginal += 'i';
                    x += 3; 
                } else {
                    palavraOriginal += letraCriptografada;
                }
                break;
            case 'o':
                if (palavraCriptografada.slice(x, x + 4) === 'ober') {
                    palavraOriginal += 'o';
                    x += 3; 
                } else {
                    palavraOriginal += letraCriptografada;
                }
                break;
            case 'u':
                if (palavraCriptografada.slice(x, x + 4) === 'ufar') {
                    palavraOriginal += 'u';
                    x += 3;  
                } else {
                    palavraOriginal += letraCriptografada;
                }
                break;
            default:
                palavraOriginal += letraCriptografada;
        }
    }

    exibirTextoNaTela('resultado__h2', palavraOriginal);
    console.log(palavraOriginal);
}

function limpar(){
    palavra = document.getElementById('inputprincipal');
    palavra.value = '';
    exibirTextoNaTela('resultado__h2', 'Nenhuma mensagem encontrada, digite algo &#128515');
}

function limparInput() {
    palavra = document.getElementById('inputprincipal');
    let valorAtual = palavra.value;
    let valorLimpo = valorAtual.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
    palavra.value = valorLimpo;
    
}
