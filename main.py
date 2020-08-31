mode = 0

def fill1(mode, brightness=255):
    for i in range(5):
        for j in range(5):
            (row, col) = (i, j) if mode == 0 else (j, i)
            led.plot_brightness(col, row, brightness)
            basic.pause(50)

def spiral1(brightness=255):
    for i in range(3):
        led.plot_brightness(i, 0, brightness)
        led.plot_brightness(4, i, brightness)
        led.plot_brightness(4-i, 4, brightness)
        led.plot_brightness(0, 4-i, brightness)
        basic.pause(100)
    for i in range(0, 2):
        led.plot_brightness(i, 1, brightness)
        led.plot_brightness(3, i, brightness)
        led.plot_brightness(4-i, 3, brightness)
        led.plot_brightness(1, 4-i, brightness)
        basic.pause(100)
    for i in range(1, 2):
        led.plot_brightness(i, 2, brightness)
        led.plot_brightness(2, i, brightness)
        led.plot_brightness(4-i, 2, brightness)
        led.plot_brightness(2, 4-i, brightness)
        basic.pause(100)
    led.plot_brightness(2, 2, brightness)
    basic.pause(100)

def oppose1(mode, brightness=255):
    for i in range(5):
        for jEven in [0, 2, 4]:
            (row, col) = (i, jEven) if mode == 0 else (jEven, i)
            led.plot_brightness(col, row, brightness)
        for jOdd in [1, 3]:
            (row, col) = (4-i, jOdd) if mode == 0 else (jOdd, 4-i)
            led.plot_brightness(col, row, brightness)
        basic.pause(100)

def on_forever():
    for brightness in [255, 0]:  
        if mode == 0:  fill1(randint(0, 1), brightness)
        elif mode == 1:  spiral1(brightness)
        elif mode == 2:  oppose1(randint(0, 1), brightness)

def on_button_pressed_a():
    global mode
    mode += 1
    if mode > 2:  mode = 0
input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)