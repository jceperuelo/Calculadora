window.onload = function(){ 
/*toma el elemento del HTML "textoPantalla" */
mostrarPantalla=document.getElementById("textoPantalla"); 
}
x="0"; 
xi=1; // inicia la pantalla
coma=0; 
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //para mostrar el número que se presiona en cada botón
         if (x=="0" || xi==1  ) {	
            mostrarPantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; 
            /* si se pulsa "." al principio del número se escribe "0." */
            if (xx==".") { 
               mostrarPantalla.innerHTML="0."; 
               x=xx; //guardar número
               coma=1; 
               }
           }
           /* sigue para escribir lo que va después del "." */
           else { 
               if (xx=="." && coma==0) { 
                   mostrarPantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; 
               }
               /* No se puede presionar nuevamente el . */
               else if (xx=="." && coma==1) {} 
               /* Para los demas casos donde se ingresa u número de 1 a 9 */ 
               else {
                   mostrarPantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 
         }
function operar(s) {
         igual() //si hay operaciones pendientes se realizan primero
         ni=x //guarda el 1º nro ingresado para no perderlo mientras se ingresa el 2do
         op=s; 
         xi=1; 
         }	
function igual() {
         if (op=="no") { //no hay ninguna operación pendiente.
            mostrarPantalla.innerHTML=x;
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            mostrarPantalla.innerHTML=sol 
            x=sol; //guardamos la solución
            op="no"; 
            xi=1; 
            }
        }
function bParc() {
        mostrarPantalla.innerHTML=0; //Pantalla en 0;
        x=0; //Borrado indicador número pantalla.
        coma=0;	//reiniciamos también la coma				
}
function bTot() {
        mostrarPantalla.innerHTML=0; //poner pantalla a 0
        x="0"; //reiniciar número en pantalla
        coma=0; //reiniciar estado coma decimal 
        ni=0 //indicador de número oculto a 0;
        op="no" //borrar operación en curso.
}
function raizC() {
         x=Math.sqrt(x) 
         mostrarPantalla.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }
function porcent() { 
         x=x/100 
         mostrarPantalla.innerHTML=x; 
         igual() 
         xi=1 
         }
function opuest() { 
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a string
         mostrarPantalla.innerHTML=x; 
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);		 
         mostrarPantalla.innerHTML=x;
         xi=1; 
         }

function retro(){ //Borrar el último escrito
         carac=x.length; 
         br=x.substr(carac-1,carac) 
         x=x.substr(0,carac-1) //borra el ultimo caracter
         if (x=="") {x="0";} 
         if (br==".") {coma=0;} 
         mostrarPantalla.innerHTML=x;  
         }