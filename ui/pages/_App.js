// import App from 'next/app'
import "../css/theme.scss"
import React from "react";
import fetch from "node-fetch";

const PROD_URL = "http://example"; // TODO: implement
const WEB_URL = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : PROD_URL;

// this is the url of the webpage which is localhost unless this is running in production
export const API_URL = `${WEB_URL}/api`;

// TODO: use this instead of exporting the url
export async function api_fetch(req) {
	let res;
	await fetch(`${API_URL}/${req}`)
		.then(res => res.json())
		.then((data => {res = data}));
	return res;
}

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp