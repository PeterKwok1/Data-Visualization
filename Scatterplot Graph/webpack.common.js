const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
}