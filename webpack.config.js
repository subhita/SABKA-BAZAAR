const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')




module.exports = {

  entry: [

    './src/css/stylesheets/style.css',

    './src/js/index.js',

  ],

  output: {

    path: path.resolve(__dirname, 'dist'),

    filename: 'bundle.js'

  },

  plugins: [

    new MiniCssExtractPlugin({

      filename: '[name].css'

    }),

    new CopyWebpackPlugin([

      { from: 'src/images', to: 'img' }

    ]),

    new HtmlWebpackPlugin(

      {  // Also generate a test.html

        template: path.resolve(__dirname, './src/views/index.html'),

        filename: 'index.html',

        inject: true

      }

    ),
    new HtmlWebpackPlugin(

      {  // Also generate a test.html

        template: path.resolve(__dirname, './src/views/product-list.html'),

        filename: 'product-list.html',

        inject: true

      }

    ),
    new HtmlWebpackPlugin(

      {  // Also generate a test.html

        template: path.resolve(__dirname, './src/views/signin.html'),

        filename: 'signin.html',

        inject: true

      }

    ),
    new HtmlWebpackPlugin(

      {  // Also generate a test.html

        template: path.resolve(__dirname, './src/views/register.html'),

        filename: 'register.html',

        inject: true

      }

    )

  



  ],

  module: {

    rules: [

      {

        test: /\.s?css$/,

        use: [

          MiniCssExtractPlugin.loader,

          'css-loader',

          'sass-loader'

        ]

      },

      {

        use: 'babel-loader',

        test: /\.js$/,

        exclude: /node_modules/

      },

      {

        test: /\.(png|svg|jpg|gif)$/,

        use: [

          'file-loader'

        ]

      }

    ]

  }


}