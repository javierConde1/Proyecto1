var izquierda = document.getElementById("izquierda");
var centro = document.getElementById("centro");
var derecho = document.getElementById("derecha"); 
var br = document.createElement("p");

function publicacion(){

    var usuario = document.createElement("p");
    var descripcion = document.createElement("p");
    var fecha = document.createElement("p");
    var imagen = document.createElement("img");
    var btnPublicar = document.createElement("button");
    btnPublicar.style.display = "block";

    var usI = document.getElementById("usuario").value;
    var desI = document.getElementById("descripcion").value;
    var url = document.getElementById("imagen").value;

    var newUsuario = document.createTextNode("Usuario: " + usI);
    var newDescripcion = document.createTextNode("Descripcion: " + desI);
    var fech = new Date();
    var newfecha = document.createTextNode("Fecha: "+ fech.getDate() + "/" + (fech.getMonth() +1) + "/" + fech.getFullYear());
    var newBtnComentar = document.createTextNode("Mostrar comentarios");
    //document.createTextNode(newfecha.getDate() + "/" + (newfecha.getMonth() +1) + "/" + newfecha.getFullYear());

    usuario.appendChild(newUsuario);
    descripcion.appendChild(newDescripcion);
    fecha.appendChild(newfecha);
    btnPublicar.appendChild(newBtnComentar);
    //imagen.appendChild(newImagen);

    izquierda.appendChild(imagen).src = url;
    centro.appendChild(usuario);
    centro.appendChild(descripcion);
    centro.appendChild(fecha);
    centro.appendChild(btnPublicar);


    btnPublicar.onclick = function comentar(){

        var comentario = document.createElement("p");
        var txtComentario = document.createElement("input");
        txtComentario.type = 'text';
        txtComentario.id = 'comen';
        var btnComentar = document.createElement("button");
        
        var newComentario = document.createTextNode("Comentario: ");
        var newbtnComentar = document.createTextNode("Comentar");

        comentario.appendChild(newComentario);
        btnComentar.appendChild(newbtnComentar);

        derecho.appendChild(newComentario);
        derecho.appendChild(txtComentario);
        derecho.appendChild(btnComentar);
    
        //var comI = document.getElementById("comentario").value;
        btnPublicar.style.display = "none";
        btnComentar.onclick = function comentario(){

            var comentarios = document.createElement("p");

            var comen = txtComentario.value;
            
            
            var newComentarios = document.createTextNode("Comentario: " + comen);            

            centro.appendChild(newComentarios);
            //centro.appendChild(br);

        }
    };
}




