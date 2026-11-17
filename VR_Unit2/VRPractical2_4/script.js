
let rnd = (l,u) => (Math.random()*(u-l) + l);
let scene, ufos = [], rockets = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-30,40);
    let z = rnd(-20,20); 
    let y = 2;
    let speed = rnd(0.08, 0.1); 
    let rocket = new Rocket(x,y,z,speed);
    rockets.push(rocket);
    
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20); 
    let y = rnd(10,20);
    let speed = rnd(0.01,0.08); 
    let ufo = new Ufo(x,y,z,speed);
    ufos.push(ufo);
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    if(ufo.y > 6){ 
      ufo.invade();
    }
  }
  
  window.requestAnimationFrame( loop );
}
