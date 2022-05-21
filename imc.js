function CalcularImc(){
    let nome = prompt ("Digete seu nome:");
    let peso = parseFloat (prompt ("Digite seu peso:"));
    let altura = parseFloat (prompt ("Digite seua altura:"));
    let imc = 0;
    let resultado;

   imc = peso / (altura * altura); //ou peso / alutura 2 ^ = potência
    console.log(imc);

    if (imc <18.5){
        resultao = "abaixo do peso" 
    }
    else if (imc >= 25 && imc < 30){
        resultado = "Peso Normal"
    }
    else if (imc >= 30 && imc < 35){
        resultado = "Obesidade 1"
    }
    else if (imc >= 35 && imc < 40){
        resultado = "Obesidade 2"
    }
    else{
        resultado = "Obesidade3"
    }
    console.log(resultado)

    document.write(nome + " possui o imc " + imc + " e está " + resultado);
    // ou 
    alert(nome + " possui o imc" + imc + " e está " + resultado );

}