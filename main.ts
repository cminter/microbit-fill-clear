let mode = 0
function xPlot(x: number, y: number, b: number = 255, d: number = 0) {
    let [col, row] = [[x, y], [4 - y, x], [4 - x, 4 - y], [y, 4 - x]][d]
    led.plotBrightness(col, row, b)
}

function wipe1(direction: number, brightness: number = 255) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            xPlot(j, i, brightness, direction)
            basic.pause(50)
        }
    }
}

function oppose1(direction: number, brightness: number = 255) {
    for (let i = 0; i < 5; i++) {
        for (let jEven of [0, 2, 4]) {
            xPlot(jEven, i, brightness, direction)
        }
        for (let jOdd of [1, 3]) {
            xPlot(jOdd, 4 - i, brightness, direction)
        }
        basic.pause(100)
    }
}

function spiral1(brightness: number = 255) {
    let i: number;
    for (i = 0; i < 3; i++) {
        led.plotBrightness(i, 0, brightness)
        led.plotBrightness(4, i, brightness)
        led.plotBrightness(4 - i, 4, brightness)
        led.plotBrightness(0, 4 - i, brightness)
        basic.pause(100)
    }
    for (i = 0; i < 2; i++) {
        led.plotBrightness(i, 1, brightness)
        led.plotBrightness(3, i, brightness)
        led.plotBrightness(4 - i, 3, brightness)
        led.plotBrightness(1, 4 - i, brightness)
        basic.pause(100)
    }
    for (i = 1; i < 2; i++) {
        led.plotBrightness(i, 2, brightness)
        led.plotBrightness(2, i, brightness)
        led.plotBrightness(4 - i, 2, brightness)
        led.plotBrightness(2, 4 - i, brightness)
        basic.pause(100)
    }
    led.plotBrightness(2, 2, brightness)
    basic.pause(100)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    //  cycle through modes
    mode += 1
    if (mode > 2) {
        mode = 0
    }
    
})
basic.forever(function on_forever() {
    let direction: number;
    //  fill then clear
    for (let brightness of [255, 0]) {
        direction = randint(0, 3)
        //  based on mode
        if (mode == 0) {
            wipe1(direction, brightness)
        } else if (mode == 1) {
            oppose1(direction, brightness)
        } else if (mode == 2) {
            spiral1(brightness)
        }
        
    }
})
