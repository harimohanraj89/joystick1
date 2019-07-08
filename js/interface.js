class Interface {
  constructor() {
    document.querySelector(".start-game").addEventListener("click", () => {
      this.startGame();
    })
  }

  startGame() {
    GAME.state = "game";
  }
}
