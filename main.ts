let count = 0
input.onButtonPressed(Button.A, function () {
    count += 1
    radio.sendString("" + (count))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    radio.setGroup(255)
})
