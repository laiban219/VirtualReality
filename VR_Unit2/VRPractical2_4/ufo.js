class Ufo{
  constructor(x,y,z,speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = speed;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-sphere");
    body.setAttribute("src", "#surface");
    body.setAttribute("rotation", {x:90, y:0, z:0});
    body.setAttribute("scale", {x:2.5, y:2.5, z:0.5});
    this.obj.append(body);

    let top = document.createElement("a-sphere");
    top.setAttribute("scale", {x:1.5, y:1.25, z:1.5});
    top.setAttribute("color","#71aaf0");
    top.setAttribute("theta-start", 0); 
    top.setAttribute("theta-length",90);
    top.setAttribute("side", "double");
    top.setAttribute("transparent", true);
    top.setAttribute("opacity", 0.5);
    this.obj.append(top);
    //multicolor light//
    let light = document.createElement("a-cone");
    light.setAttribute("radius-top",1);
    light.setAttribute("radius-bottom",4); 
    light.setAttribute("phi-start", 0);
    light.setAttribute("phi-length",180);
    light.setAttribute("side", "double");
    light.setAttribute("opacity",0.5);
    light.setAttribute("height",8)
    light.setAttribute("color","#fdfffc" );
    light.setAttribute("position","0 -5 0");
    this.obj.append(light);

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append( this.obj );
  }

  invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}