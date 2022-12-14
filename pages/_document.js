import Document, {Html, Head, Main, NextScript } from "next/document";

class MyDocunent extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps}
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="bg-slate-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocunent