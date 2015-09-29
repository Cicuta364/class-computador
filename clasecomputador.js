

var Computador = function (procesador, ram, hdd, video, marca) {
    this.procesador = procesador;
    this.ram = ram;
    this.hdd = hdd;
    this.video = video;
    this.marca = marca;
}

computador1 = new Computador("intel I7", "8 ram", "500 GB", "nvidia", "mac")
computador2 = new Computador("intel I7", "4 ram", "1000 GB", "nvidia", "mac")
computador3 = new Computador("intel I5", "4 ram", "500 GB", "nvidia", "mac")

Computador.prototype.ram = function(computador) {
  console.log("el computador1 tiene " + computador1.ram);
}
Computador.prototype.hdd = function(computador) {
  console.log("el computador2 tiene " + computador2.ram + "y" + computador2.hdd);
}
Computador.prototype.comp = function(computador) {
  console.log(computador3);
}