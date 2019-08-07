module.exports = {
  output: {
    path: `${__dirname}/public`,
    filename: 'main.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  }
};
