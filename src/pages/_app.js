import 'reset-css'
import '../windows10css/windows10.scss'

import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>RITHVIK Booting...</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        </Head>
        <Component  {...pageProps} />
    </>
}