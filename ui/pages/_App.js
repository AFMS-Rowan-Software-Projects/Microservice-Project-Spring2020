// import App from 'next/app'
import "../css/theme.scss"
import React from "react";
import fetch from "node-fetch";

// TODO: don't export this, use function below
export const API_URL = "http://pinizz68.somee.com/api";

// TODO: use this
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