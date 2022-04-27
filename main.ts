input.onButtonPressed(Button.A, function () {
    Num1 += -1
    basic.showNumber(Num1)
})
function Function3 (num: number, num2: number) {
    Sum = num + num2
    return Sum
}
input.onButtonPressed(Button.AB, function () {
    Num2 = Num1
})
input.onButtonPressed(Button.B, function () {
    Num1 += 1
    basic.showNumber(Num1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Sum =")
    basic.showNumber(Function3(Num1, Num2))
})
let Num2 = 0
let Sum = 0
let Num1 = 0
Num1 = 0
basic.forever(function () {
	
})
