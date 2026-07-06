# Should I Do It?

A playful decision generator built with HTML, CSS, and vanilla JavaScript.

Ask a question, press the button, and the app responds with a random dramatic answer. It is intentionally light, funny, and simple, while still showing DOM manipulation, browser APIs, animations, and shareable results.

## Live Links

- GitHub Repository: https://github.com/fazal305/should-i-do-it
- Live Demo: https://fazal305.github.io/should-i-do-it/

## Overview

Should I Do It? is a tiny browser app for chaotic yes/no decisions. It uses a list of preset responses, random selection logic, animated result states, Web Audio feedback, mobile vibration support, WhatsApp sharing, and a short recent-decision history.

This is a good portfolio mini-project because it is small, memorable, and easy to demo.

## Features

- Random decision generator
- Playful response pack
- Animated answer states
- Ask Again button
- WhatsApp sharing
- Recent decision history
- Web Audio API sound effect
- Mobile vibration support
- Responsive dark interface
- Keyboard support with the Enter key

## Tech Stack

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Web Audio API
- Vibration API

## Screenshots

Add screenshots after running the project.

- `docs/screenshots/home.png` - main question screen
- `docs/screenshots/result.png` - generated answer
- `docs/screenshots/history.png` - recent decisions list
- `docs/screenshots/mobile.png` - mobile layout

## Demo Video / GIF

Add a short GIF showing:

1. Typing a question
2. Generating a random answer
3. Using Ask Again
4. Showing the history list
5. Opening the WhatsApp share action

## Folder Structure

```text
should-i-do-it/
  index.html
  style.css
  script.js
  README.md
  LICENSE
  .gitignore
```

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Type a question.
4. Click `Decide My Fate`.

No build step or dependencies are required.

## Architecture Notes

The app is split into three files:

- `index.html` contains the page structure.
- `style.css` controls the dark UI, layout, button states, and animations.
- `script.js` handles random responses, history, sound, vibration, and sharing.

## Accessibility

- The input has a visible label.
- The result area uses live-region attributes so screen readers can detect answer changes.
- Buttons and links are keyboard accessible.
- Focus states are included for interactive controls.

## Performance

The app is lightweight and dependency-free. It runs fully in the browser with no backend, no package manager, and no external assets.

## Lessons Learned

- How to select random items from an array
- How to update the DOM based on user input
- How to build small interactive browser apps
- How to use browser APIs for sound, vibration, and sharing
- How to keep a mini-project simple and demo-friendly

## Future Improvements

- Save history with `localStorage`
- Add response packs by mood
- Add custom sound toggle
- Add light mode
- Add copy-to-clipboard sharing
- Add a coin-flip mode

## Fazal Labs Ecosystem

Part of **Fazal Labs** under the **Fun Lab** suite.

This is a small, playful portfolio mini-project designed to show JavaScript interaction and personality.

## License

MIT License
