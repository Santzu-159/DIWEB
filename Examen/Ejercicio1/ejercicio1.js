//1. Realiza una función con las siguientes especificaciones(todas las variables son locales)
$(function (){
	//Declara una variable con nombre elementos para seleccionar al identificador target
    let elementos = $('target');
	//Declara una variable con nombre elementosDos para seleccionar al identificador targetDos
	let elementosDos = $('targetDos');
	//Declara una variable con nombre contenedor para seleccionar al identificador contenedor
    let contenedor = $('contenedor');
	//Declara una variable con nombre resultado para seleccionar el index(posición que ocupa) de la variable elementos
   	let resultado = elementos.index();
	//Declara una variable con nombre resultadoDos para selecccionar el index de la variable elementosDos
	let resultadoDos = elementosDos.index();
	//Selecciona el identificador display y escribe el texto 'El resultado es:'variable resultado
    $('display').$text('El resultado es:'+resultado);	
	//Declara una variable llamada convertir para obtener=get el contenido de la variable resultado
    let convertir = get(resultado);	
    //Declara una variable llamada jQueryObject para obtener=get el contenido la variable convertir
    let jQueryObject = get(convertir);	
	//En  la variable jQueryObject  establece el atributo color a azul
    jQueryObject.css("color","blue");	
    //Declara una variable llamada jQueryObjectDos para obtener=get el contenido de la variable resultadoDos
   	jQueryObjectDos =  $(contenedor).children().get(resultadoDos);
	//En la variable jQueryObjectDos establece el atributo a color violeta
    jQueryObject.css("color","violet");		
	//Selecciona el identificador resultado para escribir en html el resultado es:variable resutadoDos
    $('resultado').text('El resultado es'+resultadoDos);
	//En la variable jQueryObject  aplica el método prevUntil() y la regla css para que el color sea rojo
	jQueryObject.prevUntil().css("color","red")
    
});

//2. Realiza una función para que en el identificador addClass se añada la clase rojo y se borre la clase azul

$(function(){
	$('addClass').addClass('rojo').removeClass('azul');
});
  
//3. Realiza una función con las siguientes especificaciones:
$(function (){
	//Selecciona el identificador attr para establecer el atributo color a azul
	$('attr').css("color","blue");
  
	//Selecciona el identificador attr para borrar el atributo
	$('attr').removeAttr('attr');
  
});

//4. Realiza una función que al hacer clic en el identificador attr se escribe el texto Hola soy tu nombre y DNI

$(function(){
	$('attr').click(function(){
		$($this).text("Hola soy Sandra 45789630L");
	});
});

//5. Realiza una función que al situarnos con el ratón encima del identificador attr aparece una alerta con el mensaje Hola soy el alumno tu nombre Y DNI

$(function(){
	$('attr').mouseover(function(){
		$($this).alert("Hola soy Sandra 45789630L");
	});
});

//6. Realiza una función que al quitar el ratón del identificador attr aparece una alerta con el mensaje Adiós 
$(function(){
	$('attr').mouseout(function(){
		$($this).alert("Adios");
	});
});
//7. Realiza una función que al hacer clic en el identificador addClass realice las siguientes acciones:
$(function(){
	$('addClass').click(function(){
		if($(this).css('color')!='blue'){
			$(this).css('color','blue');
		}else{
			$($this).css('color','');
		}
	});
});
	//Para cada elemento, Si el color es distinto de azul lo pone a azul y si no lo deja vacío
  	//Intercambia la clase a example
 

//8. Realiza una función con las siguientes especificaciones:
$(function(){
  //Declara una variable llamada circulos para almacenar los hijos del identificador rating-container
  let circulos = $('rating-container').children();
   
  //Al hacer clic en circulos añade la clase rating-chosen al elemento seleccionado y a todos los elementos anteriores (utiliza el método prevAll)
 $circulos.click(function(){
	 $(this).addClass('rating-chosen');
	 
 })
  //Al situarnos con el ratón encima de circulos borra la clase rating-chosen del elemento donde está situado. Después añade la clase ratin-hover al elemento donde está situado y a todos los elementos anteriores (utiliza el método prevAll)
  
  //Al quitar el ratón de circulos elimina la clase ratin-hover. 
  
});