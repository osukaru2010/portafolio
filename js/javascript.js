
  function opencv(cv) {
    var i;
    var x = document.getElementsByClassName("cv__");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cv).style.display = "block";
    
  }
  

  function validador__form(form) {
    var correcto = true;
    var msg = "Debes escribir algo en los campos:\n";
    if(form.nombre__form.value == "")
    {
      msg += "Nombre:\n";
      correcto = false;
    }
  
    if(form.email__form.value == "")
    {
      msg += "Correo\n";
      correcto = false;
    }
  
    if(form.asunto__form.value == "")
    {
      msg += "Asunto\n";
      correcto = false;
    }

    if(form.msj__form.value == ""){
      msg += "Mensaje\n";
      correcto = false;
    }
  
    if(correcto == false)
      alert(msg);
    return correcto;
    
  }
