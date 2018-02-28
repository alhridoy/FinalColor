(function () {
     var ctx,
         canvas,
         
  
        
     drawPicture = function () {  
         var gba = document.getElementById("#color").spectrum("get").toRgb(), //no hassle color picker toRGB returns a object { r, g, b, a } ie. red, green , blue alpha
             i,
             img = document.getElementById("billy"), //this is the fine piece of post-modern art from the header of this page 
             imgd, 
             n;
             pix, 
         
         ctx.drawImage(img, 0, 0); 
         imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
         pix  = imgd.data;
         n    = pix.length;

         for (i = 0; i < n; i += 4) { 
             if (pix[i + 3] > 0) { 
                 pix[i    ] = rgba.r;       // red   - values 0 to 255
                 pix[i + 1] = rgba.g;       // green - values between 0 and 255
                 pix[i + 2] = rgba.b;       // blue  - values between 0 and 255
                 pix[i + 3] = rgba.a * 255; // alpha in canvas from 0 to 255, instead between 0 and 1. 
             } 
         } 
         ctx.putImageData(imgd, 0, 0);
     },
      
   
      
   setCanvasOrPic = function () {
        if (canvasSuported()) {                            //see funtion at the top of the page 
            canvas = document.getElementById("myCanvas");
            ctx = canvas.getContext('2d');
            drawPicture();
        } 
    };
    
    initialize = function () {
        setCanvasOrPic();
    };
    addHandler(window, "load", initialize); // addHandler browser independent version of addEventListener for code see *
}());