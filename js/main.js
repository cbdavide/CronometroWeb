var cronos = new Cronometro();
var view = new View(1,cronos);
view.init();
cronos.setObservador(view);
cronos.loop();
