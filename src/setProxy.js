// http-proxy-middleware 패키지에서 createProxyMiddleware 함수를 가져옵니다.
const { createProxyMiddleware } = require("http-proxy-middleware");

// Express 애플리케이션 설정을 추가하는 함수를 내보냅니다.
module.exports = function (app) {
  // Express 애플리케이션에 프록시 미들웨어를 추가합니다.
  app.use(
    // "/api/v1" 경로로 들어오는 모든 요청에 대한 프록시 미들웨어를 생성합니다.
    createProxyMiddleware("/api/v1", {
      // 프록시 대상 서버의 주소를 설정합니다.
      target: `${process.env.REACT_APP_API_URL}`,

      // changeOrigin 옵션을 true로 설정하여 요청의 Origin 헤더를 변경합니다.
      // 이것은 CORS(Cross-Origin Resource Sharing) 이슈를 해결하는 데 도움이 됩니다.
      changeOrigin: true,
    })
  );
};
