# HorizonTiles

**Rebuilding cities, one neighborhood at a time.**

A VR fly-through experience built from real-world captures and AI reconstruction. Landing page for the HorizonTiles project.

## Local Development

No build tools required. Open `index.html` in a browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended for accurate path behavior)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deploy to GitHub Pages

### Quick setup

1. Push this repo to GitHub:
   ```bash
   git init
   git add -A
   git commit -m "Initial landing page"
   git remote add origin git@github.com:FrankGoortani/horizon-tiles.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / root
   - Save

3. Site will be live at `https://FrankGoortani.github.io/horizon-tiles/`

### Custom domain (horizon-tiles.com)

1. Add a `CNAME` file to the repo root:
   ```
   horizon-tiles.com
   ```

2. Configure DNS at your registrar:
   - **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME record**: `FrankGoortani.github.io`

3. In repo Settings → Pages, enter `horizon-tiles.com` as the custom domain.

4. Check "Enforce HTTPS" once DNS propagates.

See [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Updating Content

All content lives in `index.html`. Key sections are marked with HTML comments and semantic IDs:

| Section   | ID          | What to edit                        |
|-----------|-------------|-------------------------------------|
| Hero      | `#hero`     | Title, tagline, CTA links           |
| Features  | `#what`     | Three feature cards                 |
| Process   | `#how`      | Four-step timeline                  |
| Roadmap   | `#roadmap`  | Now / Next / Later phases           |
| Demo      | `#demo`     | Replace placeholder with embed      |
| FAQ       | `#faq`      | Question/answer `<details>` blocks  |
| Footer    | `.footer`   | Copyright, links, disclaimer        |

Styles are in `style.css`. Colors and sizing use CSS custom properties at the top of the file.

## Structure

```
├── index.html     # Single-page site
├── style.css      # All styles
├── script.js      # Nav, scroll reveal, copy link
├── favicon.svg    # Browser tab icon
└── README.md      # This file
```
