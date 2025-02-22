import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildMiniCssExtractPlugin(): MiniCssExtractPlugin {
  return new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css", // Имя основных CSS-файлов
    chunkFilename: "css/[name].[contenthash:8].css", // Имя CSS-файлов для динамических импортов
    ignoreOrder: false, // Включаю проверку порядка импортов
  });
}
