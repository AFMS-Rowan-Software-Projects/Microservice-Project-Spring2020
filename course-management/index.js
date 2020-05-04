const PORT = 3001;
const API_URL = "http://pinizz68.somee.com/"

const express = require("express");
const app = express();
const proxy = require("express-http-proxy");

// forward everything through the proxy
app.use("/", proxy(API_URL));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})