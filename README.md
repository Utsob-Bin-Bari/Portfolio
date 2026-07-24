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
| Services / what you offer, CV download | [src/components/Services/Services.jsx](src/components/Services/Services.jsx) |
| Work history | [src/components/Experience/Experience.jsx](src/components/Experience/Experience.jsx) |
| Skills and tools | [Skills.jsx](src/components/Skills/Skills.jsx), [OtherSkils.jsx](src/components/OtherSkills/OtherSkils.jsx), [Tools.jsx](src/components/Tools/Tools.jsx) |
| Projects showcase | [src/components/Portfolio/Portfolio.jsx](src/components/Portfolio/Portfolio.jsx) |
| Education | [src/components/Education/Education.jsx](src/components/Education/Education.jsx) |
| Contact form | [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx) |
| Page title and favicon | [public/index.html](public/index.html) |
| Colors and theme variables | [src/App.css](src/App.css) |

To add, remove, or reorder sections, edit the JSX in [src/App.js](src/App.js).

Drop new images into [src/img/](src/img/) and import them at the top of the component that uses them. Replace the CV at [src/components/Services/Utsob_Bin_Bari_CV.pdf](src/components/Services/Utsob_Bin_Bari_CV.pdf) with your own and update the import.

## Contact Form Setup

The form sends mail through [EmailJS](https://www.emailjs.com) — no backend required.

1. Create a free EmailJS account, then add an email **service** and a **template**.
2. Your template needs three variables: `user_name`, `user_email`, and `message`.
3. In [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx), replace the three IDs in the `emailjs.sendForm(...)` call with your own Service ID, Template ID, and Public Key.

Until you do this, submissions go to the original owner's EmailJS account.

## Deploying

`yarn build` produces a static `build/` folder that any static host will serve.

- **Vercel / Netlify** — connect the repo. Build command `yarn build`, output directory `build`.
- **GitHub Pages** — add `"homepage": "https://<user>.github.io/<repo>"` to `package.json`, install `gh-pages`, then publish the `build` folder.

## License

Free to use as a starting point for your own portfolio. Please swap out the personal content, photos, and project images before publishing.
