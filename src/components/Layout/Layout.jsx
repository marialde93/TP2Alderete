import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export { Layout };
