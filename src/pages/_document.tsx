import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {
    return () {
        <Html lang="pt-BR">
            <Head />

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}