import Document, { Head, Main, NextScript } from "next/document";
import "../styles/main.scss";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>ReactSlickSliderBug</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
