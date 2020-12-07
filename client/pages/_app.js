import 'bootstrap/dist/css/bootstrap.css';
import BuildClient from '../api/build-client';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';
import Header from '../components/header';
import Footer from '../components/Footer';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <React.Fragment>
        <Head>
          <title>FriendlyTix</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Header currentUser={currentUser} />
          <Component currentUser={currentUser} {...pageProps} />
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = BuildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
