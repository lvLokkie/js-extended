var
   webpack = require('webpack');

module.exports = {
   context: __dirname + '/modules',
   entry: {
       index: "./Menu",
       menuLesson: "./MenuLesson",
       ajaxLesson: ["./Menu", "./AjaxLesson"],
       regexpsLesson: ["./Menu", "./RegexpsLesson"],
       tabsLesson: ["./Menu",  "./TabsLesson"],
       canvasLesson: ["./Menu", "./CanvasLesson"]
   },
   output: {
      path: __dirname + "/scripts",
      filename: "[name].bundle.js",
      chunkFilename: "[id].bundle.js"
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "./jquery.js",
         jQuery:"./jquery.js",
         "window.jQuery": "./jquery.js"
      })
   ],

   devtool: 'cheap-source-map',
   watch: true,
   watchOptions: {
      aggregateTimeout: 100
   }

};