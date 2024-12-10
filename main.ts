basic.setLedColor(0xff0000)
let Zahl = 5
while (Zahl != 0) {
    Zahl += -1
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(Zahl)
}
basic.setLedColor(0x00ff00)
music.playTone(698, music.beat(BeatFraction.Whole))
