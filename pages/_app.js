import 'tailwindcss/tailwind.css'
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

const progress = new ProgressBar({
  size:4,
  color: "#FD5B61",
  className:"z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routerChangeComplete", progress.finish);
Router.events.on("routerChangeError", progress.finish);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
