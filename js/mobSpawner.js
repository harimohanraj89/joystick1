class MobSpawner {
  constructor() {
    this.interval = 20;
    this.timer = 0;
    this.tickValue = 0;
    this.start();

    GAME.ticks.push(this);
  }

  start() {
    this.tickValue = 1;
  }

  stop() {
    this.tickValue = 0;
  }

  tick() {
    this.timer += this.tickValue;

    if (this.timer >= this.interval) {
      this.timer = 0;
      this.spawn();
    }
  }

  stop() {
    this.intervalID && clearInterval(this.intervalID);
  }

  spawn() {
    let mob = new Mob(CANVAS.width, random(CANVAS.height));
    mob.setVelocity(-30, 0);
  }
}
