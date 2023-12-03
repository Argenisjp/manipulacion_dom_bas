
 let suma = document.getElementById('suma').value;
 let resta = document.getElementById('resta').value;
 let multiplicacion = document.getElementById('multiplicacion').value;
 let division = document.getElementById('division').value;
 let displey = document.getElementById('resultado');

 
 
 //  console.log(suma)
 //  console.log(resta)
 //  console.log(multiplicacion)
 //  console.log(division)
 
 
 function sumar(){
   
   let numero1 = parseInt(document.getElementById('num1').value);
   let numero2 = parseInt(document.getElementById('num2').value);
  

   let resul = numero1 + numero2;
   console.log(resul); 

   displey.innerText = "El resultado de la operacion es: " + resul;

  
}


 //comentarios sobre js
function restar(){
   
  let numero1 = parseInt(document.getElementById('num1').value);
  let numero2 = parseInt(document.getElementById('num2').value);

 let resul = numero1 - numero2;
 console.log(resul); 


}

function multiplicar(){
   
  let numero1 = parseInt(document.getElementById('num1').value);
  let numero2 = parseInt(document.getElementById('num2').value);

 let resul = numero1 * numero2;
 console.log(resul); 


}

function dividir(){
   
  let numero1 = parseInt(document.getElementById('num1').value);
  let numero2 = parseInt(document.getElementById('num2').value);

 let resul = numero1 / numero2;
 console.log(resul); 


}