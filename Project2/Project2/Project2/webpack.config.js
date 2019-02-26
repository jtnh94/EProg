const path = require('path');

module.exports = {
    entry: {
        index: "./src/index.js",
        portfolio: "./src/portfolio.js"
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 32000
                            }
                        }
                    ]
                }
        ]
    },
};