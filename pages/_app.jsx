import "../styles/globals.css";
import Layout from "../components/layout";
import { useCarts, useProducts } from "./api/useHooks";

function MyApp({ Component, pageProps }) {
  global.store = useCarts();
  global.storeProducts = useProducts();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
