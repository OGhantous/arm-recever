radio.onReceivedNumber(function (receivedNumber) {
    let recevedNumber = 0
    I = recevedNumber
})
let v = 0
let I = 0
radio.setGroup(1)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.showString("R")
basic.forever(function () {
    if (I == 1) {
        if (v < 90) {
            v = v + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    } else if (I == 2) {
        if (v > 0) {
            v = v - 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    }
})
