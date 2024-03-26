
function girar(){
  var atual = document.getElementById('carr-1');
  var c2 = document.getElementById("carr-2");
  var c3 = document.getElementById("carr-3");
  var c4 = document.getElementById("carr-4");
  var c5 = document.getElementById("carr-5");
  atual.id = 'carr-2';
  c2.id = "carr-3";
  c3.id = "carr-4";
  c4.id = "carr-5";
  c5.id = "carr-1";
}
function inverter() {
  var atual = document.getElementById("carr-1");
  var c2 = document.getElementById("carr-2");
  var c3 = document.getElementById("carr-3");
  var c4 = document.getElementById("carr-4");
  var c5 = document.getElementById("carr-5");
  atual.id = "carr-5";
  c2.id = "carr-1";
  c3.id = "carr-2";
  c4.id = "carr-3";
  c5.id = "carr-4";
}