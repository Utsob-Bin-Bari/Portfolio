# Portfolio

A single-page personal portfolio built with React. Dark/light theme, smooth-scroll navigation, animated sections, and a working contact form.

**Stack:** React 18 · Create React App · Framer Motion · Swiper · react-scroll · EmailJS

---

## Getting Started

Requires [Node.js](https://nodejs.org) 16 or newer.

```bash
git clone https://github.com/Utsob-Bin-Bari/Portfolio.git
cd Portfolio
yarn install
yarn start
```

The app opens at [http://localhost:3000](http://localhost:3000) and reloads on save.

> Prefer npm? Delete `yarn.lock`, then run `npm install` and `npm start`.

## Scripts

| Command | What it does |
| --- | --- |
| `yarn start` | Start the dev server on port 3000 |
| `yarn build` | Build a production bundle into `build/` |
| `yarn test` | Run tests in watch mode |

## Project Structure

```
public/              Static files and index.html
src/
  App.js             Page layout — sections render in this order
  Context.js         Dark/light theme context
  components/        One folder per section (.jsx + .css)
  img/               Images, grouped by where they are used
    intro/           Hero portrait, floating badges, background vectors
    projects/        App screenshots for the Portfolio carousel
    expertise/       Areas-of-expertise card icons
    stack/           Language and framework logos (Skills + Expertise)
    tools/           IDE, build and release tool logos (Tools + Other Skills)
    interests/       Other Skills / beyond-code photos
    education/       Institution logos
    decor/           Purely decorative art (the footer wave)
  fonts/             Custom fonts
```

Every section is a self-contained folder, so you can edit or remove one without touching the others.

## Making It Yours

Each item below lives in a single file — edit the text and images directly, no config needed.

| What to change | Where |
| --- | --- |
| Name, tagline, social links | [src/components/Intro/Intro.jsx](src/components/Intro/Intro.jsx) |
| Headline stats (the four circles) | [src/components/Experience/Experience.jsx](src/components/Experience/Experience.jsx) |
| Areas of expertise, CV download | [src/components/Expertise/Expertise.jsx](src/components/Expertise/Expertise.jsx) |
| Work history / roles | [src/components/Work/Work.jsx](src/components/Work/Work.jsx) — edit the `roles` array |
| Projects showcase | [src/components/Portfolio/Portfolio.jsx](src/components/Portfolio/Portfolio.jsx) — edit the `projects` array |
| Skills and tools | [Skills.jsx](src/components/Skills/Skills.jsx), [OtherSkils.jsx](src/components/OtherSkills/OtherSkils.jsx), [Tools.jsx](src/components/Tools/Tools.jsx) |
| DSA topics and contest ratings | [DSA.jsx](src/components/DSA/DSA.jsx), [CP.jsx](src/components/CP/CP.jsx) |
| Education | [src/components/Education/Education.jsx](src/components/Education/Education.jsx) |
| Contact form | [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx) |
| Page title, description, OG tags | [public/index.html](public/index.html) |
| Colors and theme variables | [src/App.css](src/App.css) |

To add, remove, or reorder sections, edit the JSX in [src/App.js](src/App.js).

Drop new images into the matching [src/img/](src/img/) subfolder and import them at the top of the component
that uses them. **All raster images are WebP** — logos and flat-colour icons are encoded losslessly
(pixel-identical to the source PNG, but smaller), photographs at quality 80. Icons that are genuinely
vector stay `.svg`; do not convert those. Replace the CV at [src/components/Expertise/Utsob_Bin_Bari_CV.pdf](src/components/Expertise/Utsob_Bin_Bari_CV.pdf) with your own — keep the filename and no code change is needed.

### Project screenshots

Screenshots live in [src/img/projects/](src/img/projects/) and are imported like every other image, so
they get content-hashed filenames and pick up the immutable one-year cache header that `netlify.toml`
sets on `/static/*`. The trade-off is that a missing file fails the build instead of failing silently —
which is what you want. `ProjectCard` still renders a dashed placeholder if an image 404s at runtime.

Name them `<slug>-1.webp`, `<slug>-2.webp`, `<slug>-3.webp` — the `slug` values are `sonalipay`,
`conected`, `corrigan-sports`, `taraa`, `evocart`. Import them at the top of
[Portfolio.jsx](src/components/Portfolio/Portfolio.jsx) and list them in that project's `shots` array;
the array drives the carousel, so drop an entry to show fewer slides.

**Resize and convert before committing:** raw phone captures run 1–4 MB each. The card renders the
shot at 236×512 CSS px, so **640 px wide at WebP quality 80** is already comfortably retina-sharp and
lands each file under 90 KB. Anything larger is wasted bytes.

The dashed frame around each shot is sized from two custom properties on `.pj-shots` — `--shot-h`
(the height) and `--shot-bw` (the border width). The `<img>` sizes its own width from the image's
aspect ratio so the border hugs the screenshot; the placeholder mirrors that box via `aspect-ratio`.
Change the height in one place (`--shot-h`, including the mobile override) and both stay in step.

### Gotchas when editing CSS

- CSS in this project is **globally scoped** (Create React App emits one stylesheet per chunk).
  `.design`, `.s-button`, `.cards`, `.blueCircle` and `.yellowCircle` are each defined in several
  section files, so whichever chunk loads last wins. New sections should use a unique class prefix —
  `Work.css` uses `.wk-` and the project cards use `.pj-` for exactly this reason.
- [public/index.html](public/index.html) sets `* { font-size: 20px }`. That universal selector beats
  inheritance, so **every** text element needs its font size stated explicitly — setting it on a
  parent is not enough.
- The two orbit rings in `Skills.css` and `Tools.css` position children by `:nth-child(1)`…`(9)`.
  Keep both lists at exactly nine entries, or add new coordinates first.

## Contact Form Setup

The form sends mail through [EmailJS](https://www.emailjs.com) — no backend required.

1. Create a free EmailJS account, then add an email **service** and a **template**.
2. Your template needs three variables: `user_name`, `user_email`, and `message`.
3. Set the IDs either as environment variables or by editing the constants at the top of
   [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx):

   ```
   REACT_APP_EMAILJS_SERVICE_ID=...
   REACT_APP_EMAILJS_TEMPLATE_ID=...
   REACT_APP_EMAILJS_PUBLIC_KEY=...
   ```

   The EmailJS public key is designed to be client-side, so committing it is fine. Until you point
   these at your own account, submissions go to the original owner's EmailJS account.

### If the form stops sending

EmailJS proxies through whichever mail provider you connected, and **that connection breaks on its
own**. No code change works around any of the failures below — each is fixed in the EmailJS
dashboard under **Email Services**.

Check the whole path without opening a browser. EmailJS rejects non-browser callers, so the
`origin` header is required:

```bash
curl -i -X POST https://api.emailjs.com/api/v1.0/email/send \
  -H 'Content-Type: application/json' \
  -H 'origin: http://localhost' \
  -d '{"service_id":"...","template_id":"...","user_id":"...",
       "template_params":{"user_name":"test","user_email":"you@example.com","message":"test"}}'
```

`200 OK` means the whole path works. A `4xx` body names the failing piece — note that it names only
the *first* piece it cannot resolve, so a bad service ID masks anything wrong with the template.

| Response | Cause | Fix |
| --- | --- | --- |
| `412 Gmail_API: Invalid grant` | The Gmail OAuth token expired. | Reconnect the Gmail service. |
| `412 Gmail_API: Request had insufficient authentication scopes` | The service was reconnected, but Google's consent screen was accepted without **Send email on your behalf**. | Disconnect, reconnect, and tick that permission. |
| `The service ID not found` | That service does not exist in the account the public key belongs to. | See below. |

A dashboard gotcha worth knowing: **EmailJS will not save a service whose test send fails.** So a
service ID copied out of an *Edit Service* dialog that is showing a `412` was never persisted, and
the live form gets `The service ID not found` rather than the `412` the dashboard shows. Fix the
Gmail connection first, save, then copy the ID that the saved service ends up with.

The form surfaces failures to the visitor and offers a `mailto:` fallback, so a broken provider
connection no longer loses messages silently.

## Deploying

`yarn build` produces a static `build/` folder that any static host will serve.

- **Vercel / Netlify** — connect the repo. Build command `yarn build`, output directory `build`.
- **GitHub Pages** — add `"homepage": "https://<user>.github.io/<repo>"` to `package.json`, install `gh-pages`, then publish the `build` folder.

## License

Free to use as a starting point for your own portfolio. Please swap out the personal content, photos, and project images before publishing.
