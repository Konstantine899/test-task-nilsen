import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export function buildForkTsCheckerWebpackPlugin():ForkTsCheckerWebpackPlugin {
  return new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: "write-references",
    },
  });
}
