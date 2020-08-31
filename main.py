mode = 0

def xPlot(x:number, y:number, b:number=255, d:number=0):
    col, row = [[x, y], [4-y, x], [4-x, 4-y], [y, 4-x]][d]
    led.plot_brightness(col, row, b)

def wipe1(direction, brightness=255):
    for i in range(5):
        for j in range(5):
            xPlot(j, i, b=brightness, d=direction)
            basic.pause(50)

def oppose1(direction:number, brightness:number=255):
    for i in range(5):
        for jEven in [0, 2, 4]:
            xPlot(jEven, i, b=brightness, d=direction)
        for jOdd in [1, 3]:
            xPlot(jOdd, 4 - i, b=brightness, d=direction)
        basic.pause(100)

def spiral1(brightness:number=255):
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

def on_forever():
    # fill then clear
    for brightness in [255, 0]:  
        direction = randint(0, 3)
        # based on mode
        if mode == 0:  wipe1(direction, brightness)
        elif mode == 1:  oppose1(direction, brightness)
        elif mode == 2:  spiral1(brightness)

def on_button_pressed_a():
    global mode
    # cycle through modes
    mode += 1
    if mode > 2:  mode = 0

input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)