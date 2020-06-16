module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/Main.ts',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        path: __dirname + '/script',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            }
        ]
    }
};