import { createProxyMiddleware } from "http-proxy-middleware";
export default createProxyMiddleware({
	target: "http://pinizz68.somee.com",
	changeOrigin: true
});