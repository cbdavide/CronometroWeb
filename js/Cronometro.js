function Cronometro(){
  var segundos = new UnidadDeTiempo(60);
  var minutos = new UnidadDeTiempo(60);
  var horas = new UnidadDeTiempo(24);
  var estado = 'pause';
  var observador;

  this.setObservador = function(observer){
    observador = observer;
  };

  var notify = function(){
    var h = horas.getPosicion(),
        m = minutos.getPosicion(),
        s = segundos.getPosicion();
    observador.update(h,m,s);
  };

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
    notify();
  };

  var retroceder = function(){
    if(segundos.getPosicion() === 0 && minutos.getPosicion() === 0 && horas.getPosicion() === 0){
      estado = 'pause';
      console.log('Ya no se puede retroceder más');
    } else {
      segundos.retroceder();
      if(segundos.getPosicion() === 0){
        if(minutos.getPosicion() === 0 && horas.getPosicion() === 0) {
          estado = 'pause';
          console.log('Ya no se puede retroceder más');
        } else {
          minutos.retroceder();

          if(minutos.getPosicion() === 0){
            horas.retroceder();
          }
        }
      }
      notify();
    }
  };

  this.loop = function(){
    this.interval = window.setInterval(function(){

      if(estado != 'pause'){
        if(estado == 'avanzar'){
          avanzar();
        }else if(estado == 'retroceder'){
            retroceder();
        }
        // console.log(horas.getPosicion()+' : '+minutos.getPosicion()+' : '+segundos.getPosicion());
      }
    },1000);
  }

}
