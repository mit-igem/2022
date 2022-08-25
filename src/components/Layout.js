import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import * as styles from "../styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
