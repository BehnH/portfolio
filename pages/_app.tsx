import App, { AppContext } from 'next/app'
import React from 'react';
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

class MyApp extends App {
    static async getInitialProps(appContext: AppContext) {
        const appProps = await App.getInitialProps(appContext)
        return { ...appProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Behn Hayhoe</title>

                    {/* Favicon Data */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-icon-512x512.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/favicon/android-icon-192x192.png" />
                    <meta name="theme-color" content="#bbf7d0" />

                    <meta charSet="UTF-8" />
                    <meta name="HandheldFriendly" content="True" />
                    <meta lang="English" />

                    <meta property="og:title" content="Behn" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://behn.dev" />
                    <meta name="theme-color" content="#bbf7d0" />
                </Head>

                <div className='selection:bg-green-200'>
                    <Component {...pageProps} />
                </div>
            </>
        )
    }
}

export default MyApp