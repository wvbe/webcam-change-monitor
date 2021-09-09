# webcam-change-monitor

A tiny command-line application that takes the feed of a webcam and outputs a
graph of how much the feed changes overtime. This is essentially a "movement
detection" thingymajig.

Outputs an updating graph to your TTY terminal;

```sh
node run.js
```

```
       2.08 ┤╭╮
       1.97 ┼╯│
       1.86 ┤ │   ╭╮
       1.75 ┤ │   ││
       1.64 ┤ │╭╮╭╯│
       1.53 ┤ ╰╯││ ╰╮
       1.42 ┤   ││  │
       1.32 ┤   ││  │
       1.21 ┤   ││  │╭╮
       1.10 ┤   ││  ╰╯│
       0.99 ┤   ╰╯    │
       0.88 ┤         │
       0.77 ┤         │╭╮
       0.66 ┤         │││
       0.55 ┤         │││
       0.44 ┤         ╰╯│
       0.33 ┤           ╰───╮   ╭╮    ╭╮          ╭──
       0.22 ┤               ╰───╯╰────╯╰──────────╯
```

Numbers are in percentages. Because the "alpha" in RGBA never changes in a
webcam, the higest possible change (switching from fully black to fully white)
is a change of 75%.