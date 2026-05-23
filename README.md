# Hair Guy Bri

Marketing site for **hairguybri.com** — static HTML/CSS/JS, with booking embedded from `hairguybri.salonmonster.com`.

## Structure

```
index.html              Single-page site (hero, services, about, gallery, visit)
book.html               Booking page (iframe embed of SalonMonster)
assets/css/styles.css   All styles
assets/js/main.js       Nav scroll state, mobile menu, scroll reveals
.github/workflows/      GitHub Pages deploy workflow
```

## Local preview

No build step. Open `index.html` in a browser, or run any static server, e.g.:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploying

Deployment is automated via GitHub Pages (`.github/workflows/pages.yml`). On every push to the branch, the workflow publishes the static files.

**One-time setup in the GitHub repo UI:**

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The workflow will run on the next push (or trigger manually via the Actions tab → "Deploy to GitHub Pages" → "Run workflow").
4. The live URL appears at the top of the **Settings → Pages** page once deployed.

## Editing content

The site is built with **placeholder copy** in square brackets — `[XX]`, `[SERVICE DESCRIPTION]`, etc. Search the HTML files for `[` to find every spot that needs real content:

- Tagline, service names + descriptions + prices, about copy, stats
- Address, phone, email, social handles, hours
- Hero photo, about photo, gallery photos (currently Unsplash hotlinks — replace with Bri's own)

## Booking embed

`book.html` embeds `hairguybri.salonmonster.com` in an iframe. If SalonMonster ever blocks framing, the page falls back to a "Open in new tab" link.
