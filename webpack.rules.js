module.exports = [{
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  },
  {
    test: /\.css$/i,
    exclude: [/node_modules/],
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: [/node_modules/],
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.mdx?$/,
    exclude: [/node_modules/],
    use: [{
      loader: 'babel-loader',
      options: {}
    }, {
      loader: '@mdx-js/loader',
      /** @type {import('@mdx-js/loader').Options} */
      options: {}
    }]
  },
  {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: [{
      loader: 'file-loader',
    }, ],
  },
];