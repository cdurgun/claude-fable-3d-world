# Third-party licenses

The MIT license in [`LICENSE`](LICENSE) covers only the original source code of this project
(`scene/`, `scripts/`, `data/` and the documentation). It does **not** apply to, replace or
override the licenses of the third-party components below, which remain under their own terms.

| Component | How it is used | License |
|---|---|---|
| [three.js](https://github.com/mrdoob/three.js) 0.187.0 | Runtime dependency, installed from npm and loaded from `node_modules` (not copied into this repository) | MIT, text below |
| [Playwright](https://github.com/microsoft/playwright) | Dev dependency for `npm test` only (not copied into this repository) | Apache-2.0, see <https://github.com/microsoft/playwright/blob/main/LICENSE> |
| Space Grotesk (500 and 700 weights, woff2) | Copied into `assets/fonts/` for the on-screen text | SIL Open Font License 1.1, full text and copyright notice in [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt) |

The installed npm packages carry their own license files in `node_modules/`.

## Space Grotesk

Copyright 2020 The Space Grotesk Project Authors (<https://github.com/floriankarsten/space-grotesk>)

Licensed under the SIL Open Font License, Version 1.1. The full license is in
[`assets/fonts/OFL.txt`](assets/fonts/OFL.txt) (copied unmodified from the upstream repository)
and must accompany any redistribution of the font files.

## three.js

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
