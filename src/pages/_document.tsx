import Document, { Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    return () {
        <Html className="" lang="pt-BR">
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}