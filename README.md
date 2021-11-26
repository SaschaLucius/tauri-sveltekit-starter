# Setup

* Checkout repository
* run `npm install`
* build `npm run tauri build`

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


  "tailwindProduction": "NODE_ENV=production npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css --minify",
    "build:tailwind": "postcss ./src/assets/css/tailwind.css -o static/assets/css/tailwindoutput.css",
    "tailwind:watch": "cross-env TAILWIND_MODE=watch cross-env NODE_ENV=development postcss src/styles/tailwind.css -o src/styles/tailwind-output.css -w",
    "tailwind:build": "cross-env TAILWIND_MODE=build cross-env NODE_ENV=production postcss src/styles/tailwind.css -o src/styles/tailwind-output.css",
    "tailwindDev": "npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css",

    "dev": "concurrently \"yarn run dev:only\" \"yarn run tailwind:watch\"",
    "dev": "concurrently \"yarn dev:only\" \"yarn tailwind:watch\"",
    "dev:only": "svelte-kit dev",
    "build": "yarn run tailwind:build && yarn run build:only",
    "build": "yarn tailwind:build && yarn build:only",
    "build:only": "svelte-kit build"





// https://tailwindcss.com/docs/preflight#disabling-preflight
  corePlugins: {
    preflight: false,
   }



   full config
   https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration