function Cronometro(){
  var segundos = new UnidadDeTiempo(60);
  var minutos = new UnidadDeTiempo(60);
  var horas = new UnidadDeTiempo(24);
  var estado = 'pause';

  this.setEstado = function(state){
    estado = state;
  };

  this.getEstado = function(){
    return estado;
  };

  var avanzar = function(){
    segundos.avanzar();

    if(segundos.getPosicion() === 0){
      minutos.avanzar();

      if(minutos.getPosicion() === 0){
        horas.avanzar();
      }
    }
  };

  var retroceder = function(){
    segundos.retroceder();

    if(segundos.getPosicion() === 0){
      minutos.retroceder();

      if(minutos.getPosicion() === 0){
        horas.retroceder();
      }
    }
  };

  this.loop = function(){
    var interval = window.setInterval(function(){

      if(estado != 'pause'){
        console.log('#YOLO');
        if(estado == 'avanzar'){
          avanzar();
        }else if(estado == 'retroceder'){
          retroceder();
        }
        console.log(horas.getPosicion()+' : '+minutos.getPosicion()+' : '+segundos.getPosicion());
      }
    },1000);
  }

}
