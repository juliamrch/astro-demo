# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Deploy on Clever Cloud

- Add `CC_WEBROOT="/dist"` to serve your static bundle

## Ressources

- [File-based routing in Astro](https://docs.astro.build/en/basics/astro-pages/#file-based-routing)
- [Astro page HTML](https://docs.astro.build/en/basics/astro-pages/#astro-pages)
- [Dynamic expressions in Astro](https://docs.astro.build/en/basics/astro-syntax/#jsx-like-expressions)
- [CSS variables in Astro](https://docs.astro.build/en/guides/styling/#css-variables)
- [Astro Component Overview](https://docs.astro.build/en/basics/astro-components/)
- [Component Props in Astro](https://docs.astro.build/en/basics/astro-components/#component-props)
- [Component-based Design](https://www.droptica.com/blog/component-based-design/)
- [Astro `<slot />`](https://docs.astro.build/en/basics/astro-components/#slots)
- [Astro layout components](https://docs.astro.build/en/basics/layouts/)
- [`Astro.glob()` API documentation](https://docs.astro.build/en/reference/api-reference/#astroglob)

### Routes

If you need information to construct the page routes, write it inside `getStaticPaths()`.
To receive information in the HTML template of a page route, write it outside `getStaticPaths()`.

#### More

- [Static Routing in Astro](https://docs.astro.build/en/guides/routing/#static-routes)

### Astro Islands

- [Astro Integrations Guide](https://docs.astro.build/en/guides/integrations-guide/)
- [Using UI Framework Components in Astro](https://docs.astro.build/en/guides/framework-components/#using-framework-components)
- [Astro client directives reference](https://docs.astro.build/en/reference/directives-reference/#client-directives)
