$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    //TODO 2 - Create Platforms
createPlatform(350, 150, 150, 1000,"blue");
createPlatform(1350, 420, 50, 50, "blue");
createPlatform(150, 600, 200, 300,"blue");
createPlatform(5, 650, 100, 40, "red");
createPlatform(250, 500, 50, 20,"blue");
createPlatform(250, 375, 50, 20, "blue");
createPlatform( 150, 275, 50, 20,"blue");
createPlatform(650, 150, 20, 20,"blue");
createPlatform(750, 150, 500, 50, "blue");
createPlatform(550, 600, 20, 20,"blue");
createPlatform(550, 400, 20, 20,);
createPlatform(1250, 0, 20, 425, );
createPlatform(575, 400, 680, 20);
createPlatform(700, 550, 1.5, 10,"red");
createPlatform(800, 600, 1.5, 10, "red");
createPlatform(950, 550, 400, 200, "red");
createPlatform(1275, 300, 1.5, 10,"red",);
createPlatform(1350, 250, 1.5, 10, "red",);
createPlatform(1280, 150, 1.5, 10, "red");
createPlatform(1350, 100, 150,10, "red");

    // TODO 3 - Create Collectables
createCollectable("database", 260, 425, 0, 0.7);
createCollectable("database", 450, 100, 0, 0.7);
createCollectable("database", 1200, 100, 0, 0.7);
createCollectable("database",1350,50,0,0.7)
createCollectable("database",540, 525, 0, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 850, 650)
createCannon("bottom", 1000, 900)
createCannon("bottom", 1200, 800)
createCannon("right", 800, 0.5)
createCannon("left", 300, 1500)
createCannon("bottom", 1300, 1300)

    
  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
