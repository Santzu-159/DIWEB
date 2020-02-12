let celdaPosicion;

    $(document).ready(function(){

        asignarEventos();
      
        $("#insertar").on("click", function(){
            if($("#insertar").val() == "Insertar"){
                let posicion = $("#posicion").val();
                let nombre = $("#nombre").val();
                let puntos = $("#puntos").val();              
                
                $("tbody tr:last").after("<tr><td>" + posicion + "</td><td>" + nombre + "</td>" +
                    "<td>" + puntos + "</td><td>" +
                    "<input type=\"button\" class=\"seleccionar\" value=\"Seleccionar\" />" +
                    "<input type=\"button\" class=\"borrar\" value=\"Borrar\" />" +
                    "<input type=\"button\" class=\"modificar\" value=\"Modificar\" /></td></tr>");

                
                asignarEventos();

            } else {
                celdaPosicion.text($("#posicion").val());
                celdaPosicion.next().text($("#nombre").val());
                celdaPosicion.next().next().text($("#puntos").val());
            }
            
            resetearCampos();
        });

        $("#cancelar").on("click", function(){
            resetearCampos();
        });
    });
    
    let resetearCampos = function(){
        
        $("#posicion").val("");
        $("#nombre").val("");
        $("#puntos").val("");

        $("#insertar").val("Insertar");				
    };


    function asignarEventos(){			

        $(".seleccionar").on("click", seleccionar);
        $(".borrar").on("click", borrar);
        $(".modificar").on("click", modificar);
    }

    
    function seleccionar(){
            if($(this).val()=="Seleccionar"){
                $(this).parent().parent().addClass('seleccionado');
                $(this).val("Deseleccionar");
            }else{						
                $(this).parent().parent().removeClass('seleccionado');
                $(this).val("Seleccionar");
            }
        }
    function borrar(){
        $(this).parent().parent().remove();	
    }
    function modificar(){
            celdaPosicion = $(this).parent().parent().find("td:first"); 
            $("#posicion").val(celdaPosicion.text());					
            $("#nombre").val(celdaPosicion.next().text());
            $("#puntos").val(celdaPosicion.next().next().text());
            $("#insertar").val("Modificar");
            
            
            let posicion = $("#posicion").val();
            let nombre = $("#nombre").val();
            let puntos = $("#puntos").val();
            				
    }