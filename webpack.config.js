const path = require('path');

module.exports = {
    entry: 'C:\\Users\\Usuario\\WebstormProjects\\Modern_JavaScript_course\\chapter_20_UI_Library\\src\\index.js',
    output: {
        path: path.resolve(__dirname, 'chapter_20_UI_Library/dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'chapter_20_UI_Library/dist'),
        publicPath: '/assets/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};