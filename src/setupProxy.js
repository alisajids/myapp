/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

/* eslint-disable no-undef */
module.exports = function (app) {
  /* eslint-disable no-undef */
  const API_PROXY_URI = process.env.REACT_APP_API_URI; // API call
  console.log("Inside setupProxy>>>>>>>>>>>>>")
  console.log(API_PROXY_URI)
  console.log(process.env.REACT_APP_API_URL)
  app.use(
    createProxyMiddleware(API_PROXY_URI,{
      /* eslint-disable no-undef */
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      // pathRewrite: {
      //     [API_PROXY_URI]: '',
      // },
    }),
  );
};
