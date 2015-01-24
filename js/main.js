var app = {
  'add': document.getElementById('clip'),
};
function MakeCronometro(){
  var cronometro = new Cronometro();
  this.view = new View(cronometro);
  this.init = function(){
    this.view.init();
    cronometro.setObservador(this.view);
    cronometro.loop();
  };
}

var cronometro = new MakeCronometro();
cronometro.init();

app.add.addEventListener('click',function(){
  var tag_temp = new TagView(cronometro.view.getTiempo());
  tag_temp.init();
});
