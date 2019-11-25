basic.forever(function () {
    pins.servoWritePin(AnalogPin.P8, 180)
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P8, 45)
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P8, 0)
})
