var app = {
  'add': document.getElementById('add'),
};
app.add.addEventListener('click',function(){

  // app.contador++;
});
function MakeCronometro(){
  var cronometro = new Cronometro();
  var view = new View(cronometro);
  this.init = function(){
    view.init();
    cronometro.setObservador(view);
    cronometro.loop();
  };
}

var cronometro = new MakeCronometro();
cronometro.init();
