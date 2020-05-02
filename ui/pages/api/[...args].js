import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
	api: {
		bodyParser: false
	}
};

export default createProxyMiddleware({
	target: "http://pinizz68.somee.com",
	changeOrigin: true,
	api: {
		bodyParser: false
	}
});
