# [Astor Expo](https://astor-expo.saurabhmalvia997.workers.dev/)

A modern cross-platform starter kit combining the web-first performance of **Astro** with the native capabilities of **React Native**. It leverages **Uniwind** and **Tailwind CSS v4** to provide a seamless, rich, and universal UI experience across all platforms.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI & Components**: [React Native](https://reactnative.dev/) & [React Native Web](https://necolas.github.io/react-native-web/)
- **Styling**: [Uniwind](https://uniwind.dev/) & [Tailwind CSS v4](https://tailwindcss.com/)
- **Bundler**: [Vite](https://vitejs.dev/) & `vite-plugin-rnw`

## 📦 Installation Guide

This project is configured to use `pnpm` as its package manager. Ensure you have Node.js and `pnpm` installed before proceeding.

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone https://github.com/malviys/astro-expo.git
   cd astor-expo
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

## 🛠️ Development

To start the local development server, run:

```bash
pnpm dev
```

The application runs on port **4321** by default. Open your browser and navigate to [`http://localhost:4321`](http://localhost:4321) to see the application in action.

## 🧞 Available Commands

All commands are run from the root of the project using your terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs project dependencies.                   |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Builds your production site to `./dist/`         |
| `pnpm preview`            | Previews your build locally before deploying     |
| `pnpm astro ...`          | Runs CLI commands like `astro add`, `astro check`|

## 👀 Want to learn more?

- Read the [Astro documentation](https://docs.astro.build)
- Explore the [React Native documentation](https://reactnative.dev/docs/getting-started)
- Check out the [Uniwind documentation](https://uniwind.dev/)

## 💡 Project Rationale

This project serves as an experiment before migrating an existing Fumadocs project to Astro. While similar attempts were made with Next.js (Fumadocs), styling failed to work properly due to a missing webpack plugin. Both Nativewind and Uniwind were tested; Uniwind functioned partially but failed on specific components because these libraries redirect React Native components to their own implementations. The unofficial Next.js webpack plugin for Uniwind proved unable to resolve missing React Native components, prompting this shift to evaluating Astro.
