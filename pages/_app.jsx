import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";

function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <Layout>
      <Component {...pageProps} />
      <CustomCursor />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
