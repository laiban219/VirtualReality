
let scene; 
let car;
let pokemonball;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  car = document.querySelector("#car");
  pokemonball = document.querySelector("#pokemonball");
  car.dx = 0.01;
  car.x = 0;

  pokemonball.a = 0; 
  pokemonball.da = 1;
  
  loop();
})

function loop(){ 
  car.x += car.dx; 
  car.setAttribute("position", {x:car.x, y:0, z:-5}); 

  pokemonball.a += pokemonball.da;
  pokemonball.setAttribute("rotation", {x:pokemonball.a, y:0, z:0}); 
  window.requestAnimationFrame(loop);
}
