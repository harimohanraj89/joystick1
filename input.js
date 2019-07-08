let serial;

class Input {
  constructor() {
    this.deadzone = {
      minX: -5,
      maxX: 5,
      minY: -5,
      maxY: 5
    }

    this.serial = new p5.SerialPort();
    serial = this.serial;

    let portlist = this.serial.list();
    this.serial.open("/dev/tty.usbmodem14511");


    this.serial.on('connected', this.serverConnected);
    this.serial.on('list', this.gotList);
    this.serial.on('error', this.gotError);
    this.serial.on('open', this.gotOpen);
    this.serial.on('data', this.gotData.bind(this));
  }

  serverConnected() {
    print("We are connected!");
  }

  gotList(thelist) {
    // theList is an array of their names
    for (let i = 0; i < thelist.length; i++) {
      // Display in the console
      print(i + " " + thelist[i]);
    }
  }

  gotOpen() {
    print("Serial Port is open!");
  }

  gotError(theerror) {
    print(theerror);
  }

  gotData() {
    let rawX, rawY;
    [rawX, rawY] = this.serial.readStringUntil("\n").split(",");

    if (!rawX || !rawY) { return; }

    let mappedX = map(rawX, 0, 1024, -100, 100);
    let mappedY = map(rawY, 0, 1024, -100, 100);

    let deadX = ((mappedX < this.deadzone.minX) || (mappedX > this.deadzone.maxX)) + 0;
    let deadY = ((mappedY < this.deadzone.minY) || (mappedY > this.deadzone.maxY)) + 0;

    var event = new CustomEvent('inputData', { detail: { x: mappedX * deadX, y: mappedY * deadY } });
    window.dispatchEvent(event);
  }
}
