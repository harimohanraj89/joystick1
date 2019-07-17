let GAME = {
  state: "start",
  ticks: [],
  draws: []
};

let CANVAS = {
  width: 500,
  height: 500
}

function setup() {
  let canvas = createCanvas(CANVAS.width, CANVAS.height);
  canvas.parent('#canvas-container');
  noStroke();
  rectMode(CENTER);

  let joystickInput = new JoystickInput();
  let keyboardInput = new KeyboardInput();
  let gameInterface = new Interface();
  let mobSpawner = new MobSpawner();
  GAME.player = new Player(250, 250);

  window.addEventListener('inputData', function(event) {
    let x, y;
    x = event.detail.x;
    y = event.detail.y;

    GAME.player.setVelocity(x, y);
  }.bind(this))
}

function draw() {
  background(20,135,200);

  if (GAME.state == "game") {
    GAME.ticks.forEach(function(object) {
      object.tick();
    })

    GAME.draws.forEach(function(object) {
      object.draw();
    })
  }
}
