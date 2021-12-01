def on_button_pressed_a():
    music.play_tone(988, music.beat(BeatFraction.WHOLE))
    basic.show_number(randint(1, 6))
    basic.pause(200)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global L_an
    if L_an == 0:
        music.set_built_in_speaker_enabled(False)
        basic.show_string("off")
        L_an = 1
    elif L_an == 1:
        music.set_built_in_speaker_enabled(True)
        basic.show_string("on")
        L_an = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

L_an = 0
L_an = 0
music.set_built_in_speaker_enabled(True)
basic.show_string("on")

def on_forever():
    music.set_volume(255)
basic.forever(on_forever)