import webpack from "webpack";

export function buildFileLoader(): webpack.RuleSetRule {
  return {
    test: /\.(png|jpe?g|gif|woof|woof2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
}
