import "../styles/globals.css";
import Layout from "../components/layout";

/*Font Awsomeの設定*/
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Font AwesomeのCSSを自動で追加しないように設定

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
