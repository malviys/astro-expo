// @ts-check
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { rnw } from "vite-plugin-rnw";
import { uniwind } from "uniwind/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      components: {
        Header: "./src/components/Header.astro",
      },
    }),
    react(),
  ],

  vite: {
    resolve: {
      alias: {
        "react-native": "react-native-web",
      },
    },
    ssr: {
      noExternal: ["react-native", "react-native-web", "uniwind"],
    },
    css: {
      lightningcss: {},
    },
    plugins: [
      // rnw(),
      ...rnw().filter((plugin: any) => !Array.isArray(plugin)),
      tailwindcss(),
      uniwind({
        cssEntryFile: "src/styles/global.css",
        dtsFile: "./uniwind-types.d.ts",
      }),
    ],
  },

  adapter: cloudflare(),
});