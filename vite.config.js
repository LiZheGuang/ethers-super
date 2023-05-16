import { defineConfig, loadEnv } from "vite";
import testPlugin from "./plugin";

export default defineConfig((config) => {
  /**
   * @returns
   * @param mode   => development
   * @param command => serve
   * @param ssrBuild => ssrBuild:false
   */
  const { mode, command, ssrBuild } = config;
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [testPlugin()],
    optimizeDeps: {
      exclude: [],
    },
  };
});
