function SomaDosNumeros ()
{
let Num1 = parseInt  (prompt("Digite o numero" ));
let Num2 = parseInt  (prompt("Digite o numero" ));
let Num3 = parseInt  (prompt("Digite o numero" ));
let Resultado = (0)
let NumMaior1 = (0)
let NumMaior2 = (0)

if (Num1 < Num2 && Num1 < Num3) {
    NumMaior1 = Num2 
    NumMaior2 = Num3
       
     if 
    (Num2 < Num1 && Num2 < Num3) {
        NumMaior1 = Num1
        NumMaior2 = Num3
        
}
         
    else if         (Num3 < Num1 && Num3 < Num2) {
                NumMaior1 = Num1
                NumMaior2 = Num2

                
        }

         Resultado = NumMaior1 + NumMaior2

document.write ("Maiores Números são: ", NumMaior1, " e ", NumMaior2)

document.write ("Soma: ", Resultado)

}    
}