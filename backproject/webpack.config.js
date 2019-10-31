const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // 入口
    entry: './src/main.js',

    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle-[name]-[hash:5].js',
    },

    // 测试服务器（为了在开发环境中测试使用，编译打包后就没有服务器了）
    devServer: {
        contentBase: path.join(__dirname, './src'),
        // open: true
    },

    // 加载器
    module: {
        rules: [
            // js,jsx
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                },
                include: path.resolve(__dirname, './src')
            },

            // css,sass
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // 删除dist文件夹
        new CleanWebpackPlugin(),

        // 创建dist文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename:'index.html'
        })
    ]
}