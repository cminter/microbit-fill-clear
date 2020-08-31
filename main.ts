let mode = 0
function fill1(mode: number, brightness: number = 255) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let [row, col] = mode == 0 ? [i, j] : [j, i]
            led.plotBrightness(col, row, brightness)
            basic.pause(50)
        }
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

function oppose1(mode: number, brightness: number = 255) {
    for (let i = 0; i < 5; i++) {
        for (let jEven of [0, 2, 4]) {
            let [row, col] = mode == 0 ? [i, jEven] : [jEven, i]
            led.plotBrightness(col, row, brightness)
        }
        for (let jOdd of [1, 3]) {
            let [row, col] = mode == 0 ? [4 - i, jOdd] : [jOdd, 4 - i]
            led.plotBrightness(col, row, brightness)
        }
        basic.pause(100)
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    mode += 1
    if (mode > 2) {
        mode = 0
    }
    
})
basic.forever(function on_forever() {
    for (let brightness of [255, 0]) {
        if (mode == 0) {
            fill1(randint(0, 1), brightness)
        } else if (mode == 1) {
            spiral1(brightness)
        } else if (mode == 2) {
            oppose1(randint(0, 1), brightness)
        }
        
    }
})
