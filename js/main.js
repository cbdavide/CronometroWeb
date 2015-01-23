//Modo chambon
//Cronometro
  var crono = new Cronometro();
  crono.loop();
//Labels
  var label_hora = document.getElementById('horas');
  var label_minuto = document.getElementById('minutos');
  var label_segundo = document.getElementById('segundos');
//Botones
  var pause = document.getElementById('pause');
  var forward = document.getElementById('avanzar');
  var backward = document.getElementById('retroceder');
//Eventos
  pause.addEventListener('click',pausar);
  forward.addEventListener('click',avanzar);
  backward.addEventListener('click',retroceder);
//Funciones
  function pausar(){
    crono.setEstado('pause');
    console.log('pausado');
  };

  function avanzar(){
    crono.setEstado('avanzar');
    console.log('Avanzando');
  };

  function retroceder(){
    crono.setEstado('retroceder');
    console.log('Retroceder');
  };
