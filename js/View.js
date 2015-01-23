function View(i){
  var index = i;
  var template = document.getElementById('cronometro-template').innerHTML;
  var elementos = {};
  this.view = {
    'horas': '00',
    'minutos': '00',
    'segundos': '00',
    'id_horas': 'ch'+index,
    'id_minutos': 'cm'+index,
    'id_segundos': 'cs'+index,
  };
  this.rendered = Mustache.render(template,this.view);
  this.add = function(){
    //Append de the element in the html
    document.getElementById('contenido').innerHTML = this.rendered;
  };
  this.initElementos = function(){
    elementos.labelHoras = document.getElementById('ch'+index);
    elementos.labelMinutos = document.getElementById('cm'+index);
    elementos.labelSegundos = document.getElementById('cs'+index);
  };

  this.update = function(horas,minutos,segundos){
    if(horas < 10)
      horas = '0'+horas;
    if(minutos < 10)
      minutos = '0'+minutos;
    if(segundos < 10)
      segundos = '0'+segundos;

    elementos.labelHoras.innerHTML = horas;
    elementos.labelMinutos.innerHTML = minutos;
    elementos.labelSegundos.innerHTML = segundos;
  };
}
