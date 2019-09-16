import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    {/* <title>FrModelcar - Home</title> */}
                    <link rel="stylesheet" href="/_next/static/styles.css" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.2, width=device-width"
                        key="viewport"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}