
let cantidaddealumnos =prompt("cuantos alumnos son?");
let alumnostotales = [];


 for (let i = 0; i <  cantidaddealumnos ; i++) {
 	alumnostotales[i] = [prompt ("nombre del alumno " + (i+1)),0]
 }
 
 const tomarAsistencia = (nombre,p)=>{
     let presensia = prompt(nombre);
     if (presensia =="p" || presensia == "P") 
     	{alumnostotales[p][1]++;}    }
                                     
for (let i = 0 ; i < 30 ; i++) {
	for(alumnos in alumnostotales)
		{tomarAsistencia(alumnostotales[alumnos][0], alumnos);}
                               }


for (alumnos in alumnostotales){
    let resultado = `${alumnostotales[alumnos][0]}:<br>
    _____________Presente:${alumnostotales[alumnos][1]}<br>
    _____________Ausente:${30 - parseInt(alumnostotales[alumnos][1])}
    `;

    if (30 - alumnostotales[alumnos][1] > 3) 
    	{resultado+= "REPROBADO POR INANCISTENCIAS<br><br>";}
    else
        {resultado+= "<br><br>";}
     document.write(resultado)
}




























// let free=false;

// const invitado = (time) =>
// {
// 	let edad = prompt ("hola, cual es tu edad?");
// 	if (edad > 18) 
// 		{   
// 			if (time >= 2 && time < 7 && free == false) 
// 	                {
// 	                 alert("por ser la primera persona en pasar despues de las 2 a.m puede pasar gratis, difrute la fiesta");
// 	                 free=true;
// 	                }
	                	
//             else
//             	    {alert(`son las ${time}.Hs , por no ser la primera persona en pasar despues de las 2 a.m tenes que pagar la entrada`);}
// 	    }             			
//     else 
// 	    {alert("perdon , usted es menor de edadno puede pasar");}
// }

// invitado(12);
// invitado(2);
// invitado(3);
// invitado(3);
// invitado(5);







// function suma(num1,num2) {
// let union= num1 + num2;
// document.write(union)
// }
// suma(13,17)

// const suma = (num1,num2)=>
// {
//  let union = num1 + num2
//  document.write(union)
// }
// suma(45,55)







/*let animalesvoladores=["3 loro","4 paloma","5 tucan"]

let animales = ["1 gato" , "2 perro" ,animalesvoladores, "6 vaca"]

granja:
for (let animale in animales) 
{
	                if(animale == 2)
	                {
	                	for (let animale of animalesvoladores)
	                		{document.write(animale + "<br>");
	                	     continue granja;}
                
	                }
	                else{document.write(animales [animale] + "<br>");}
	                      
}
*/

/*let frutas=["banana","manzana","pera";
 

 for (tipodefruta in frutas)
 	{ document.write(tipodefruta + " ");}
 
document.write("<br>")

for (tipodefruta of frutas)
 	{ document.write(tipodefruta + " ");}
*/

/*let numero = 0 ;
 while (numero<20) 
 {
 	numero++;
 	document.write(numero + " ");
 	if (numero==18) {
 		break
 	}
 }
*/

 /*dineroCofla= prompt("cuanta plata tenes Cofla?");
 dineroRoberto= prompt("cuanta plata tenes Roberto?");
 dineroPedro= prompt("cuanta plata tenes Pedro?");

dineroCofla=parseInt(dineroCofla)
dineroRoberto=parseInt(dineroRoberto)
dineroPedro=parseInt(dineroPedro)

if (dineroCofla >= 0.6 && dineroCofla <= 1){
    alert("Cofla Podes comprar solo un Palito de helado de agua pobre");
     alert("y te sobran " + (dineroCofla - 0.6));
 }

else if(dineroCofla >= 1 && dineroCofla < 1.6){
	alert("Cofla Podes comprar el helado de crema");
      alert("y te sobran " + (dineroCofla - 1));
  }

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("Cofla podes comprar un Bombon helado marca heladix");
      alert("y te sobran " + (dineroCofla - 1.6));
  }
     
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("Cofla podes comprar un Bombon helado marca heladivich");
     alert("y te sobran " + (dineroCofla - 1.7));
 }

else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("Cofla podes comprar un Bombon helado marca helardo");
       alert("y te sobran " + (dineroCofla - 1.8));
   }

else if(dineroCofla >= 2.9){
	alert("Cofla podes comprar potecito de helado con confites o un pote de 1/4 Kg");
      alert("y te sobran " + (dineroCofla - 2.9));
  }

else
{
	alert("sos un pobre de mierda");
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1)
    {alert("Roberto podes comprar un Palito de helado de agua pobre");
     alert("y te sobran " + (dineroRoberto - 0.6));
 }

else if(dineroRoberto >= 1 && dineroRoberto < 1.6) 
	{alert("Roberto podes comprar  Pedro el helado de crema");
     alert("y te sobran " + (dineroRoberto - 1));
 }

else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7)
	{alert("Roberto podes comprar bombon helado marca heladix");
     alert("y te sobran " + (dineroRoberto - 1.6));
 }

else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8)
	{alert("Roberto podes comprar bombon helado marca heladivich");
     alert("y te sobran " + (dineroRoberto - 1.7));
 }

else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9)
	{alert("Roberto podes comprar bombon helado marca helardo");
     alert("y te sobran " + (dineroRoberto - 1.8));
 }

else if(dineroRoberto >= 2.9)
	{alert("Roberto podes comprar potecito de helado con confites o un pote de 1/4 Kg");
     alert("y te sobran " + (dineroRoberto - 2.9));
 }
else
{
	alert("sos un pobre de mierda");
}
  


if (dineroPedro >= 0.6 && dineroPedro < 1)
    {alert(" Pedro Podes comprar un Palito de helado de agua pobre");
     alert("y te sobran " + (dineroPedro - 0.6));
 }

else if(dineroPedro >= 1 && dineroPedro < 1.6) 
	{alert(" Pedro Podes comprar el helado de crema");
      alert("y te sobran " + (dineroPedro - 1));
  }

else if(dineroPedro >= 1.6 && dineroPedro < 1.7)
	{alert(" Pedro podes comprar Bombon helado marca heladix");
     alert("y te sobran " + (dineroPedro - 1.6));
 }

else if(dineroPedro >= 1.7 && dineroPedro < 1.8)
	{alert(" Pedro podes comprar Bombon helado marca heladivich");
     alert("y te sobran " + (dineroPedro - 1.7));
 }

else if(dineroPedro >= 1.8 && dineroPedro < 2.9)
	{alert(" Pedro podes comprar Bombon helado marca helardo");
     alert("y te sobran " + (dineroPedro - 1.8));
 }

else if(dineroPedro >= 2.9)
	{alert(" Pedro podes comprar potecito de helado con confites o un pote de 1/4 Kg");
     alert("y te sobran " + (dineroPedro - 2.9));
 }
else
{
	alert("sos un pobre de mierda");
}
*/


