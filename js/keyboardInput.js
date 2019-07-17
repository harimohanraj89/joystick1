class KeyboardInput {
  constructor() {
    GAME.ticks.push(this);
  }

  tick() {
    let x = 0;
    let y = 0;

    if (keyIsDown(LEFT_ARROW))  { x -= 100; }
    if (keyIsDown(RIGHT_ARROW)) { x += 100; }
    if (keyIsDown(UP_ARROW))    { y -= 100; }
    if (keyIsDown(DOWN_ARROW))  { y += 100; }

    var event = new CustomEvent('inputData', { detail: { x, y } });
    window.dispatchEvent(event);
  }
}
