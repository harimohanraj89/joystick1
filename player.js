class Player {
  constructor(x, y) {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.color = 255;
    this.speed = 0.05;

    this.setPosition(x, y);
    this.setVelocity(0, 0);

    GAME.ticks.push(this);
    GAME.draws.push(this);
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  move(x, y) {
    this.setPosition(
      this.position.x + x,
      this.position.y + y
    );
  }

  setVelocity(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
  }

  tick() {
    this.move(this.speed * this.velocity.x, this.speed * this.velocity.y);
  }

  draw() {
    fill(this.color);
    rect(this.position.x, this.position.y, 20,20);
  }
}
