const HtmlWebpackPlugin=requ ("html-webpack-plugin")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")
const path=require("path")


module.exports={
    node: "development",
    entry: {
        index:path.resolve(__dirname,"src","main.js")
    },
    output: {
        path: path.resolve(__dirname,"/dist"),
        filename:  "[name].[contenthash].bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.(sa|sc|c)ss$/1,

                use: [MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                test:/\js$/,

                exclude: /node_modules/,

                use: ["babel-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( options:  {

            template: path.resolve(__dirname,"src","index.html")
        }),
        new MiniCssExtractPlugin()
    ]
} 