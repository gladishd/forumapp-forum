// import '../styles/globals.css'

// // function MyApp({ Component, pageProps }) {
// //   return <Component {...pageProps} />
// // }

// // export default MyApp

// import { Provider } from 'next-auth/client'
// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
// export default MyApp;
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
