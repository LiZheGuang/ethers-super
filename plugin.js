const fs = require("fs");
const path = require("path");

const parser = require("@babel/parser");

// path.resolve()
console.log();

export default function TestPlugin() {
  return {
    name: "test-plugin",
    config(config, { command, mode }) {
      //   此环节获取conifg配置
      console.log(config, "=> config=>config");
      console.log(command, "=> config=>command");
      console.log(mode, "=> config=>mode");
    },
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      // config = resolvedConfig
      console.log("存储最终解析的配置");
      // 我要在此处输出这个整体的最后配置
      //   fs.writeFile(
      //     path.resolve(__dirname, "./test-resolverConfig.json"),
      //     JSON.stringify(resolvedConfig),
      //     function (err) {
      //       if (err) throw err;
      //       console.log("File has been saved!");
      //     }
      //   );
    },

    async transform(code, id) {
      console.log(`File ${id} transformed`);
      const extname = path.extname(id);

      if (extname === ".js" || extname === ".vue") {
        // 解析代码为 AST
        const ast = parser.parse(code, { sourceType: "module" });
      }
      return {
        code,
        map: null,
      };
    },
    async buildEnd(data) {
      console.log("buildend= > vite 插件 BuildEnd结束");
    },
    transformIndexHtml(html) {
      // dev-server 期间 Index html的传入
      //   console.log(html);
    },
  };
}
