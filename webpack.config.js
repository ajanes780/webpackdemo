const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// The configuration object
const config = {
    // How webpack starts the app
    entry: {
        index: './src/index.js',
        print: './src/printMe.js',
    },

    // Where webpack is going to compile our code too
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // cleans dist folder of un used files
        clean: true
    },
    // Runs a webserver
    devServer: {
        static: './dist', hot: true,
    },
    mode: "development",
    infrastructureLogging: {
        colors: true,
        level: 'verbose'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/i, // style-loader has to come first , then ccs-loader or will break webpack
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource',
        }, {
            test: /\.(csv|tsv)$/i, use: ['csv-loader'],
        }, {
            test: /\.xml$/i, use: ['xml-loader'],

        },],
    },
}


module.exports = (env, args) => {

    if (env.dev) {
        config.mode = 'development';
    }
    if (env.prod) {
        config.mode = 'production ';
        config.devtool = 'inline-source-map';
    }
    // returns our configs
    return config
};

