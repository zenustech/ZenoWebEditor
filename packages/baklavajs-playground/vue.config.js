module.exports = {
  runtimeCompiler: true,
  publicPath: "./",
  configureWebpack:{
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            },
        ]
    }
  }
}

