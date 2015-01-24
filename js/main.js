var app = {
  'add': document.getElementById('add'),
};
app.add.addEventListener('click',function(){

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
var t1 =  new TagView('00 : 01 : 02');
t1.init();
var t2 =  new TagView('00 : 01 : 02');
t2.init();
