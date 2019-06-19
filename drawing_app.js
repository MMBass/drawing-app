window.addEventListener('load', ()=> {
    const canvas = document.querySelector('#main_canvas');
    const ctx = canvas.getContext("2d");
    console.log(ctx);

    //Resizing
     canvas.height = window.innerHeight;
     canvas.width = window.innerWidth;

     //variables:
     let painting = false;
     
     function startPosition(){
         painting = true;
     }

     function finishedPosition(){
         painting = false;
         ctx.beginPath();
     }
     function draw(e){
         if(!painting) return;
         ctx.lineWidth = 8;
         ctx.lineCap = "round";
         ctx.strokeStyle = "black";

         ctx.lineTo(e.clientX, e.clientY);
         ctx.stroke();
         ctx.beginPath();
         ctx.moveTo(e.clientX, e.clientY);
      }
     //EventListeners:
     canvas.addEventListener('mousedown',startPosition);
     canvas.addEventListener('mouseup',finishedPosition);
     canvas.addEventListener('mousemove',draw);
});
