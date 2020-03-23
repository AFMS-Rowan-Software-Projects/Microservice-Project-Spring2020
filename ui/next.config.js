const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
module.exports = withSass(
	withImages({
		webpack: (config, { isServer }) => {
			if (!isServer) {}
			config.node = {
				fs: "empty"
			};
			return config;
		},
	})
);