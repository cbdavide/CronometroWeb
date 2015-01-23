function View(i,crono){
  var index = i;
  var cronometro = crono;
  var template = document.getElementById('cronometro-template').innerHTML;
  var elementos = {};
  this.view = {
    'id_caja' : 'cronometro'+index,
    'horas': '00',
    'minutos': '00',
    'segundos': '00',
    'id_horas': 'ch'+index,
    'id_minutos': 'cm'+index,
    'id_segundos': 'cs'+index,
    'id_btn_retroceder': 'cbr'+index,
    'id_btn_pause': 'cbp'+index,
    'id_btn_avanzar': 'cba'+index
  };
  this.rendered = Mustache.render(template,this.view);
  this.init = function(){
    this.print();
    this.initElementos();
    this.addListener();
  };
  this.print = function(){
    //Append de the element in the html
    var section = document.getElementById('contenido');
    var temp_section = section.innerHTML;
    section.innerHTML = temp_section + this.rendered;
  };
  this.initElementos = function(){
    //Labels
    elementos.labelHoras = document.getElementById(this.view.id_horas);
    elementos.labelMinutos = document.getElementById(this.view.id_minutos);
    elementos.labelSegundos = document.getElementById(this.view.id_segundos);
    //Botones
    elementos.btnRetroceder = document.getElementById(this.view.id_btn_retroceder);
    elementos.btnPausa = document.getElementById(this.view.id_btn_pause);
    elementos.btnAvanzar = document.getElementById(this.view.id_btn_avanzar);
  };
  /**
   * Añadir el listener de los botones
   */
  this.addListener = function(){
    // elementos.btnPausa.addEventListener('click',pausar);
    elementos.btnAvanzar.addEventListener('click',avanzar);
    elementos.btnRetroceder.addEventListener('click',retroceder);
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

  function pausar(){
    //Habilitar y deshabilitar botones
    elementos.btnPausa.removeEventListener('click',pausar);
    elementos.btnRetroceder.addEventListener('click',retroceder);
    elementos.btnAvanzar.addEventListener('click',avanzar);
    //Añadir o quitar clase disabled
    elementos.btnPausa.classList.add('disabled');
    elementos.btnAvanzar.classList.remove('disabled');
    elementos.btnRetroceder.classList.remove('disabled');
    //Pausar
    cronometro.setEstado('pause');
    console.log('pausado');
  }

  function avanzar(){
    //Habilitar y deshabilitar botones
    elementos.btnPausa.addEventListener('click',pausar);
    elementos.btnAvanzar.removeEventListener('click',avanzar);
    elementos.btnRetroceder.addEventListener('click',retroceder);
    //Añadir o quitar clase disabled
    elementos.btnPausa.classList.remove('disabled');
    elementos.btnAvanzar.classList.add('disabled');
    elementos.btnRetroceder.classList.remove('disabled');
    //Avanzar
    cronometro.setEstado('avanzar');
    console.log('avanzar');
  }

  function retroceder(){
    //Habilitar y deshabilitar botones
    elementos.btnPausa.addEventListener('click',pausar);
    elementos.btnAvanzar.addEventListener('click',avanzar);
    elementos.btnRetroceder.removeEventListener('click',retroceder);
    //Añadir o quitar clase disabled
    elementos.btnPausa.classList.remove('disabled');
    elementos.btnAvanzar.classList.remove('disabled');
    elementos.btnRetroceder.classList.add('disabled');
    //Retroceder
    cronometro.setEstado('retroceder');
    console.log('retroceder')
  }

}
