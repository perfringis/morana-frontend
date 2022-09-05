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
    test: /\.(css|scss|sass)$/i,
    exclude: [/node_modules/],
    use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        }
      },
      {
        loader: 'sass-loader'
      },
      {
        loader: 'postcss-loader'
      }
    ],
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