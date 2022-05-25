function Tabuada() {
    let numero = parseInt (prompt("Digite um Numero"))
    let resposta = parseInt(0)
    let tabuada = parseInt(0)
    if (numero > 10 ){
        alert ("Numero invalido")
    }
        else {
            for (let i=0; i<=10; i++)

            tabuada += numero + " X " + i + " = " + numero * i + "<br/>";
                resposta = tabuada
                 document.write(resposta);
        }

}