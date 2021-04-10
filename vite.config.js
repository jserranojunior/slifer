// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({

// });

export default ({ command }) => {
  if (command === "serve") {
    return {
      plugins: [vue(), envCompatible()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 3000,
        hmr: { host: "localhost", port: 3000 },
      },
    };
  }
};
