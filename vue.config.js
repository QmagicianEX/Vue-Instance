module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        https: false,
        proxy: {
          '/api': {
            target: 'http://192.168.205.1:8084',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
}