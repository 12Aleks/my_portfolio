import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Скрипт Google Tag Manager для клиентской стороны */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtm.js?id=GTM-59ZKV4TH`}
                    />
                </Head>
                <body>
                {/* Noscript версия для GTM */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-59ZKV4TH"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>

                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
