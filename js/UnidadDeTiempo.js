function UnidadDeTiempo(lim){
  var limite = lim;
  var posicion = 0;

  this.avanzar = function(){

    if(posicion < (limite - 1))
      posicion++;
    else
      posicion = 0;

  };

  this.retroceder = function(){

    if(posicion <= 0 )
      posicion = limite - 1;
    else
      posicion--;

  };

  this.getPosicion = function(){
    return posicion;
  };
}
