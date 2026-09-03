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
  img/               Images, logos, and icons
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

Drop new images into [src/img/](src/img/) and import them at the top of the component that uses them. Replace the CV at [src/components/Expertise/Utsob_Bin_Bari_CV.pdf](src/components/Expertise/Utsob_Bin_Bari_CV.pdf) with your own — keep the filename and no code change is needed.

### Project screenshots

Project screenshots are served from `public/projects/` rather than imported from `src/img/`, because a
missing `src/` import breaks the build whereas a missing public file just falls back to a placeholder.

Name them `<slug>-1.png`, `<slug>-2.png`, `<slug>-3.png` using the `slug` from the `projects` array in
[Portfolio.jsx](src/components/Portfolio/Portfolio.jsx) — currently `sonalipay`, `conected`,
`corrigan-sports`, `taraa`, `evocart`. Each project's `shots` array lists which indexes exist, so drop
an entry to show fewer slides.

**Resize before committing:** phone captures run 1–3 MB each. Target **≤900 px wide and ≤200 KB** per
image, or the bundle balloons.

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

   The EmailJS public key is designed to be client-side, so committing it is fine.

### If the form stops sending

EmailJS proxies through whichever mail provider you connected, and **that connection expires**. A
Gmail-backed service returns `HTTP 412 — Gmail_API: Invalid grant. Please reconnect your Gmail
account`, which no code change can work around: reconnect the service in the EmailJS dashboard under
**Email Services**.

You can check the credentials without opening a browser:

```bash
curl -i -X POST https://api.emailjs.com/api/v1.0/email/send \
  -H 'Content-Type: application/json' \
  -H 'origin: http://localhost' \
  -d '{"service_id":"...","template_id":"...","user_id":"...",
       "template_params":{"user_name":"test","user_email":"you@example.com","message":"test"}}'
```

`200 OK` means the whole path works. A `4xx` body names the failing piece.

The form surfaces failures to the visitor and offers a `mailto:` fallback, so a broken provider
connection no longer loses messages silently.

Until you do this, submissions go to the original owner's EmailJS account.

## Deploying

`yarn build` produces a static `build/` folder that any static host will serve.

- **Vercel / Netlify** — connect the repo. Build command `yarn build`, output directory `build`.
- **GitHub Pages** — add `"homepage": "https://<user>.github.io/<repo>"` to `package.json`, install `gh-pages`, then publish the `build` folder.

## License

Free to use as a starting point for your own portfolio. Please swap out the personal content, photos, and project images before publishing.
