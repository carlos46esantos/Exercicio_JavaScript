function ConverterTemperatura() {
    if (document.getElementById('Centigrados').value == ""){
        alert("O precimento e obrigatorio"),focus(); //manda o cursor para o campo
        return; 
    }

    // pegando o valor do campo centigrados
    let c =parseFloat(document.getElementById('Centigrados').value);
    // faço o calculo da conversão
    let f = (9 * c + 160) / 5;
    //atribuir o resultado ao valor do campo fahrenit
    document.getElementById('Fahrenheit').value = f;

    if (f > 50){
        document.getElementById('Fahrenheit').style.backgroundColor = 'red';
    }else {
        document.getElementById('Fahrenheit').style.backgroundColor = 'blue';
    }

}