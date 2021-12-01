input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Eighth))
    basic.showNumber(randint(1, 6))
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
    basic.showString("reset")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (L_an == 0) {
        music.setBuiltInSpeakerEnabled(false)
        basic.showString("off")
        L_an = 1
    } else if (L_an == 1) {
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        basic.showString("on")
        L_an = 0
    }
})
let L_an = 0
L_an = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
basic.showString("on")
