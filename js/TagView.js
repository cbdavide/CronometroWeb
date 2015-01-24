function TagView(t){
  var template = document.getElementById('tag-template').innerHTML;
  var view = {
    'tiempo': t
  };
  var elementos = {
    'container': document.getElementById('tag_container')
  };
  var rendered = Mustache.render(template,view);
  var print = function(){
    var contenido = elementos.container.innerHTML;
    elementos.container.innerHTML = contenido + rendered;
  };
  this.init = function(){
    print();
  };
}
