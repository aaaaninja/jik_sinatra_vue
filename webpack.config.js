module.exports = {
  output: {
    path: `${__dirname}/public/js`,
    filename: 'main.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  }
};
