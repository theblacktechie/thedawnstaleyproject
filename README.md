# The Dawn Staley Project

A doctoral creative production research project by Kris E. Smith, examining how data visualization can change the way we see, talk about, and communicate about women's basketball.

Companion website to the doctoral dissertation at Clemson University's Rhetoric, Communication, and Information Design (RCID) program.

**Live site:** [https://thedawnstaleyproject.com](https://thedawnstaleyproject.com)

## About

This is the public-facing companion site for the dissertation *The Dawn Staley Effect: Seeing the Game Differently — Data Visualization as a Communication Tool in Women's Basketball*. The site is organized into five tabs:

- **Home** — project overview and dedication
- **The Project** — research question, method, and creative artifact
- **The Road** — the journey from a 2022 Ole Miss capstone to the dissertation
- **The Work** — selected portfolio pieces and dissertation work in progress
- **About** — bio, committee, contact, and citation

## Stack

Static HTML, CSS, and JavaScript. No build step. Hosted on GitHub Pages with a custom domain.

- `index.html` — single-page app with five tabs
- `styles.css` — design system and layout
- `script.js` — hash-based tab routing
- `CNAME` — custom domain configuration

## Design system

- **Typeface:** Inter (single-family system, weights 300–700 with italics)
- **Background:** Pure white (`#FFFFFF`)
- **Text:** Near-black (`#0A0A0A`)
- **Accent:** Neon yellow (`#E5FF00`) — used for editorial highlights only
- **Reserved color:** Garnet (`#73000A`) — used exclusively for the words "Dawn Staley"

## Local development

No tooling required. Open `index.html` directly in a browser, or serve the directory with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Citation

Smith, K. E. (2026). *The Dawn Staley Project: Seeing The Game Differently* [Companion website to doctoral dissertation, Clemson University]. https://thedawnstaleyproject.com

## License

Site code: MIT. Content and design: © Kris E. Smith.
