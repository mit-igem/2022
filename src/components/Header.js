import React, { useRef, useState } from "react";
import * as styles from "../styles/components/Header.module.scss";

const Dropdown = ({ label, children }) => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);

  const mouseOver = (e) => {
    setShowContent(true);
  };

  const mouseOut = (e) => {
    setShowContent(false);
  };

  const dropdownStyles = {
    position: "absolute",
    left: ref.current?.offsetLeft,
    top: ref.current?.offsetTop,
    border: "1px solid red",
    zIndex: 10,
  };

  if (showContent) {
    return (
      <p ref={ref} onMouseOver={mouseOver} onMouseLeave={mouseOut}>
        {label}
        <div style={dropdownStyles}>{children}</div>
      </p>
    );
  }

  return (
    <p ref={ref} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {label}
    </p>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentLimit}>
        <h1>MIT iGEM 2022</h1>

        <nav className={styles.nav}>
          <Dropdown label="Team">
            <p>Team</p>
            <p>Attributions</p>
            <p>Collaboration</p>
          </Dropdown>
          <p>Project</p>
          <p>Parts</p>
          <p>Safety</p>
          <p>Human Practices</p>
          <p>Awards</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
