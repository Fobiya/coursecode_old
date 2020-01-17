const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//const { VueLoaderPlugin } = require('vue-loader')



const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: ''
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/main.min.js`,
    path: PATHS.dist,
    publicPath: ''
  },
  module: {

    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, 
//    {
//      test: /\.vue$/,
//      loader: 'vue-loader',
//      options: {
//        loader: {
//          scss: 'vue-style-loader!css-loader!sass-loader'
//        }
//      }
//    }, 
            
                  {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'img/[hash]-[name].[ext]'
            } 
        }]
      },
      //File loader used to load fonts

    {
      // Match woff2 in addition to patterns like .woff?v=1.1.1.
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: "url-loader",
//        loader: "file-loader",
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 5000,

          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: "application/font-woff",

          // Output below fonts directory
            
//          name: "[name].[ext]",
//            publicPath: "../fonts/[name]/[name].[ext]", // Take the directory into account
          filename: `${PATHS.assets}fonts/[name]/[name].[ext]`,
            
             name: "fonts/[name]/[name].[ext]",
//             publicPath: '',

        }
      },
    },
      {
        test: /\.pug$/,
     
          loader: 'pug-loader',
          options: {
            pretty: true,
            self: true,
          },
    
      },
            

//    {
//      test: /\.(png|jpg|gif|svg)$/,
//      loader: 'file-loader',
//      options: {
//        name: '../img/[name].[ext]'
//      }
//    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true  /* , url: false  */ }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` }  }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true /* , url: false  */ }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }
      ]
    }]
  },
//  resolve: {
//    alias: {
//      'vue$': 'vue/dist/vue.js'
//    }
//  },
  plugins: [
//    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
        
 
    filename: `${PATHS.assets}style.min.css`,
   
        
    publicPath: '/css'
    }),
//    new MiniCssExtractPlugin({
//      filename: `${PATHS.src}/css/fonts.css`,
//    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({

//      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html',
    
    }),    
//    new HtmlWebpackPlugin({
//      hash: false,
//      template: `${PATHS.src}/404.html`,
//      filename: './404.html'
//    }),    
//    new HtmlWebpackPlugin({
//      hash: false,
//      template: `${PATHS.src}/500.html`,
//      filename: './500.html'
//    }),
    new CopyWebpackPlugin([
//      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/static`, to: '' },
      { from: `${PATHS.src}/img`, to: 'img' },
//      { from: `${PATHS.src}/css`, to: 'css' }
//      { from: `${PATHS.src}/css`, to: 'css' }
//      { from: `${PATHS.src}/fonts`, to: 'fonts' }        
    ])
  ],
};
