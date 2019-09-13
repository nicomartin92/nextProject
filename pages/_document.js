import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    {/* <title>FrModelcar - Home</title> */}
                    <link rel="stylesheet" href="/_next/static/styles.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}