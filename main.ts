function fill1(mode: number, brightness: number = 255) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let [row, col] = mode == 0 ? [i, j] : [j, i]
            led.plotBrightness(col, row, brightness)
            basic.pause(50)
        }
    }
}

basic.forever(function on_forever() {
    for (let brightness of [255, 0]) {
        fill1(randint(0, 1), brightness)
    }
})
