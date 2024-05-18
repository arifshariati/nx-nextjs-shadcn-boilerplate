## [Nx](https://nx.dev/) monorepo boilerplate for [Next JS](https://nextjs.org/) and [Shadcn](https://ui.shadcn.com/)

The goal of this boilerplate is to have repo setup for new projects in Nx workspaces without hassle of required configurations for each new project.

We have housed our projects inside `apps` folder and all reusable components and configs inside `libs` folder.

### Commands

Since this repo is a boilerplate for using [Shadcn](https://ui.shadcn.com/) with [Next JS](https://nextjs.org/) projects in [Nx](https://nx.dev/) workspaces. You can get started with your projects fairly quickly. You can fork and re-use this repo for your projects. Doing so you may want to change some dictionary for your projects such as the project name etc. So, go ahead and do so.

#### Clone or Fork

Clone or Fork the repo `git@github.com:arifshariati/nx-nextjs-shadcn-boilerplate.git`

#### Installation

Run bellow commands to install dependencies.

```javascript
   npm i
```

#### Run sample project

`npm run dev` is currently attached to `sample-project`. You can add your own scripts in `package.json`

```javascript
// spins sample-project on local
npm run dev
```

#### Adding Shadcn components

`Shadcn` components are housed inside `libs/ui/components/shadcn/src/lib` folder. For adding Shadcn components you can use regular component installation commands available on Shadcn website. Let's say we want to have Shadcn Button component,

```
npx shadcn-ui@latest add button

```

#### Edit configs

When you are ready to build your projects on top of it, you may want to edit some configs and dictrionary such as project name etc.

### Extend this repo

If you want to improve this repo, you are most welcome to do so. Raise your PR against `main` branch and i will review it.
