# Power the Spire

A small browser game played on the floating island city from this repository. The world, the game logic and the
sounds are all code: Three.js draws the scene, Web Audio makes the sound, and there are no models, textures or
audio files.

Game code written by Claude · Fable 5.2.

## Goal

Drive the glowing orb around the island and collect all 8 energy orbs. Every orb switches on more of the city's
lights. The eighth one powers the spire in the middle: the camera pulls back, **WORLD POWERED** appears and you see
your time. The clock starts with your first key press, and the orbs are placed differently in every new game.

## Controls

| Key | Action |
|---|---|
| `W` or `↑` | Drive forward |
| `S` or `↓` | Reverse (half speed) |
| `A` `D` or `←` `→` | Steer |
| `R` | Restart with a new orb layout |
| `P` | After a win: save the run as `replay.json` |
| `M` | Music on / off |
| `N` | Sound effects on / off |

Touch: hold the screen to drive; hold the left or right third of the screen to steer that way.

Sound starts with your first key press or touch (browsers do not allow it earlier).

## Run it locally

You need Node.js and a current desktop browser with WebGL 2. The only library the game uses is
[three](https://www.npmjs.com/package/three) (MIT), installed by `npm install`.

```sh
npm install
npm start
```

Then open <http://127.0.0.1:4173/game/index.html>.

The page has to come from a web server that serves the repository root, because it loads `/game/`, `/assets/fonts/`
and `/node_modules/three/` by absolute path. Opening `index.html` directly from disk does not work.

## Seeds

The 8 orb positions come from one number, the seed. A new game picks a random seed. To play a fixed layout, add
`?seed=` and a whole number to the address:

```
http://127.0.0.1:4173/game/index.html?seed=126
```

With a seed in the address, `R` restarts the same layout, so you can practise it or race a friend on it.

## Replays

The game runs in fixed steps of 1/60 second, and a run depends only on the orb layout and the keys held in each
step. That makes a run exactly repeatable.

After a win, `P` downloads `replay.json`. It holds the seed, the 8 orb positions, the step at which each orb was
taken, the total number of steps, the time, and one hex digit per step for the keys that were held.

To watch a saved run, put the file somewhere under the repository root and pass its path:

```
http://127.0.0.1:4173/game/index.html?replay=/game/replay.json
```

The run then plays by itself to exactly the same result. `R` plays it again.

## How it is built

| File | What it does |
|---|---|
| `index.html` | The page: canvas, score, timer, win panel |
| `main.js` | The world: terrain, city, spire, lights, particles, bloom (Three.js / WebGL) |
| `game.js` | The game: player, orbs, collisions, chase camera, score, sound (Web Audio), seeds and replays |

- The simulation is separate from drawing: fixed 1/60 s steps, one drawn frame per display frame.
- Buildings, the spire and the island's edge are round obstacles the player slides around.
- `?capture` turns the live loop off; `game.seek(step)` then runs a replay to an exact step and draws that moment.
  The gameplay video was rendered this way, two steps per 30 fps frame.
