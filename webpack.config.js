const path = require("path");

module.exports = [
  {
    entry: {
      client: "./src/client/index.tsx"
    },
    output: {
      path: path.resolve(__dirname, "dist/client"),
      filename: "[name].js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    target: "web"
  },
  {
    entry: {
      server: "./src/server/index.tsx"
    },
    node: {
      dns: "mock",
      fs: "empty",
      path: true,
      url: false,
      net: "empty"
    },
    output: {
      path: path.resolve(__dirname, "dist/server"),
      filename: "[name].js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    target: "node"
  }
];
