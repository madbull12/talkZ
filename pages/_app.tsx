import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import AuthWrapper from "../components/AuthWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <ApolloProvider client={client}>
          <RecoilRoot>
            <Toaster position="top-center" reverseOrder={false} />
              <main className="bg-[#0F172A] min-h-screen ">
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </main>
          </RecoilRoot>
        </ApolloProvider>
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;
