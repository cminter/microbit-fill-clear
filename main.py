def fill1(mode, brightness=255):
    for i in range(5):
        for j in range(5):
            (row, col) = (i, j) if mode == 0 else (j, i)
            led.plot_brightness(col, row, brightness)
            basic.pause(50)

def on_forever():
    for brightness in [255, 0]:  fill1(randint(0, 1), brightness)

basic.forever(on_forever)
