let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let Cloud; 
let Snowflake;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  Cloud.a = 0; 
  Snowflake.y = 0; 

  Cloud.da = 0.1; 
  Snowflake.dy = 0.1; 

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  snowman = new Snowman(-5,0);
  //Challenge 3: Create a cloud at some high position. Don't forget to declare the variable up top.
  Cloud = new Cloud(0,8,0);
  //Challenge 7: Create a snowflake at some high position. Don't forget to declare the variable up top.
  Snowflake = new Snowflake(0, 8, 3);
  loop();
})

function loop(){
  snowman.spin();
  Cloud.a += Cloud.da;
  Snowflake.y += Snowflake.dy;

  Cloud.setAttribute("position", {x:Cloud.a, y:0, z:0}); 
  Snowflake.setAttribute("position", {x:0, y:Snowflake.y, z:0}); 

  //Challenge 4: Make the cloud fly
  //Challenge 8: Make the snowflake fall
  window.requestAnimationFrame(loop);
}
