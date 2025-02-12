import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
