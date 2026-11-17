class Rocket{ 
    constructor(x,y,z,speed){
       this.x = x; 
       this.y = 0;
       this.z = z; 
       this.dy = speed;

       this.obj = document.createElement("a-entity");

         let top = document.createElement("a-cone");
        top.setAttribute("radius", 0.5);
        top.setAttribute("radius-bottom", 0.5);
        top.setAttribute("height", 1);
        top.setAttribute("color", "grey");
        top.setAttribute("position", {x:0, y: 0, z:-2});
        this.obj.append(top);

        let top_body = document.createElement("a-cylinder");
        top_body.setAttribute("radius", 0.51);
        top_body.setAttribute("height", 0.5);
        top_body.setAttribute("src", "#top-cone");
        top_body.setAttribute("position", {x:0, y:-0.6, z:-2});
        this.obj.append(top_body);

        let body = document.createElement("a-cylinder");
        body.setAttribute("radius", 0.5);
        body.setAttribute("height", 2);
        body.setAttribute("src", "#rocket-body");
        body.setAttribute("position", {x:0, y:-1.5, z:-2});
       this.obj.append(body);

        let body_bottom = document.createElement("a-cylinder");
        body_bottom.setAttribute("radius", 0.51);
        body_bottom.setAttribute("height", 0.5);
        body_bottom.setAttribute("src", "#top-cone");
        body_bottom.setAttribute("position", {x:0, y:-2.6, z:-2});
       this.obj.append(body_bottom);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("radius-top", 0);
        bottom.setAttribute("radius-bottom", 0.25);
        bottom.setAttribute("height", 2);
        bottom.setAttribute("src", "#texture-fire");
        bottom.setAttribute("position", {x:0, y:-3.5, z:-2});
        bottom.setAttribute("rotation", {x:-180, y:0, z:0});
       this.obj.append(bottom);
        this.obj.setAttribute("radius",1);
        this.obj.setAttribute("position",{x:x,y:y,z:z});
       scene.append( this.obj );
    }

    launch(){
        this.y += this.dy; 
        //this.obj.setAttribute("position", ${x:this.x} ${y:this.y} ${z:this.z}); 
        this.obj.setAttribute("position", `${this.x} ${this.y} ${this.z}`);
        //this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z}); 
    }
}