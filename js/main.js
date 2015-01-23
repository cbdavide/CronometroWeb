var cronos = new Cronometro();
var view = new View(1);
view.add();
view.initElementos();
cronos.setObservador(view);
cronos.loop();
// Botones
  var pause = document.getElementById('pause');
  var forward = document.getElementById('avanzar');
  var backward = document.getElementById('retroceder');
//Eventos
  pause.addEventListener('click',pausar);
  forward.addEventListener('click',avanzar);
  backward.addEventListener('click',retroceder);
//Funciones
  function pausar(){
    cronos.setEstado('pause');
    console.log('pausado');
  };

  function avanzar(){
    cronos.setEstado('avanzar');
    console.log('Avanzando');
  };

  function retroceder(){
    cronos.setEstado('retroceder');
    console.log('Retroceder');
  };
