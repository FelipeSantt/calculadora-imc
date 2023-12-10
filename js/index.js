
document.querySelector('#btn-calcular').onclick = function calcularImc() {
    let altura = parseFloat(document.querySelector('#text-altura').value);
    let peso = parseFloat(document.querySelector('#text-peso').value);
    let imc = (peso / (altura * altura)).toFixed(2);

    document.querySelector('#resultado-imc').innerHTML = imc;

    if(imc < 18.5) {
        document.querySelector('#diagnostico').innerHTML = 'Abaixo do Peso!';
    }else if(imc >= 18.5 && imc <= 24.99){
        document.querySelector('#diagnostico').innerHTML = 'Parabens, peso Ideal!';
    }else if(imc >= 25 && imc <= 29.99){
        document.querySelector('#diagnostico').innerHTML = 'Levemente Acima do Peso!';
    }else if(imc >= 30 && imc <= 34.99){
        document.querySelector('#diagnostico').innerHTML = 'Obesidade grau 1!';
    }else if(imc >= 35 && imc <= 39.99){
        document.querySelector('#diagnostico').innerHTML = 'Obesidade grau 2 (Severa)!';
    }else if(imc > 40){
        document.querySelector('#diagnostico').innerHTML = 'Obesidade grau 3 (Mórbida)!';
    }else {
        document.querySelector('#diagnostico').innerHTML = 'Nenhum Dado inserido!';

    }
};

document.querySelector('#btn-reset').onclick = function limparDados() {
    document.querySelector('#resultado-imc').innerHTML = '';
    document.querySelector('#diagnostico').innerHTML = '';
    document.querySelector('#text-altura').value = '';
    document.querySelector('#text-peso').value = '';
}