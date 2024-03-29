import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import Page from "../components/Page";
import withData from "../libs/withData";
import { CheckoutStateProvider } from "../components/LocalState";

class Glamdring extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <CheckoutStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CheckoutStateProvider>
      </ApolloProvider>
    );
  }
}

export default withData(Glamdring);
