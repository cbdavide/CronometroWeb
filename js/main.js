var app = {
  'add': document.getElementById('add'),
  'contador': 0,
  'cronometros': []
};
app.add.addEventListener('click',function(){
  var temp = new MakeCronometro(app.contador);
  temp.init();
  app.cronometros.push(temp);
  app.contador++;
});
function MakeCronometro(i){
  this.cronometro = new Cronometro();
  this.view = new View(i,this.cronometro);
  this.init = function(){
    this.view.init();
    this.cronometro.setObservador(this.view);
    this.cronometro.loop();
  };
}
