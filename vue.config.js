// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'http://www.zzswork.top', // 目标服务器的地址
      //   changeOrigin: true, // 是否改变源地址
      // }
      '/api': {
        target: 'http://www.zzswork.top', 		// 本地后端抛出的接口
        secure: false,
        pathRewrite: { 						// 路径重写
          '^/api': '/' 						// 替换target中的请求地址
        },
        changeOrigin: true 					// 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
      '/download': {
        target: 'https://zzswork.pek3b.qingstor.com',
        secure: false,
        pathRewrite: { 						// 路径重写
          '^/download': '/' 						// 替换target中的请求地址
        },
        changeOrigin: true
      },
      '/getVideo': {
        target: 'https://media.w3.org',
        secure: false,
        pathRewrite: { 						// 路径重写
          '^/getVideo': '/' 						// 替换target中的请求地址
        },
        changeOrigin: true
      }
    }
  }
}
