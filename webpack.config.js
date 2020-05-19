'use strict';

const path = require( 'path' );

const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
// const BabiliPlugin = require( 'babel-minify-webpack-plugin' );

module.exports = {
  
  entry: './src/editor.js',

  output: {
    path: path.resolve( __dirname, 'build'),
    filename: 'ckeditor.js',
    library: 'ClassicEditor',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  plugins: [
    new CKEditorWebpackPlugin( {
      language: 'en'
    }),
		// new BabiliPlugin( null, {
		// 	comments: false
		// } ),
		// new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  mode: 'production',

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag'
						}
					},
					{
						loader: 'postcss-loader',
						options: styles.getPostCssConfig( {
							themeImporter: {
								themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
							},
							minify: true
						} )
					},
				]
			}
		]
	}
};