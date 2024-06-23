module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',  // or MiniCssExtractPlugin.loader if extracting CSS
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
  