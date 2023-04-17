input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . #
            . # # # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # . # .
            . . . # #
            `)
        basic.pause(1000)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
