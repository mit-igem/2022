import React, { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import * as styles from "../styles/components/Dropdown.module.scss";

const headerHeight = 60;

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
    top: headerHeight,
    zIndex: 10,
  };

  if (showContent) {
    return (
      <p ref={ref} onMouseOver={mouseOver} onMouseLeave={mouseOut}>
        <div className={styles.label}>
          {label} <AiFillCaretDown className={styles.icon} />
        </div>
        <div className={styles.dropdown} style={dropdownStyles}>
          {children}
        </div>
      </p>
    );
  }

  return (
    <p ref={ref} onMouseOver={mouseOver} className={styles.label}>
      {label} <AiFillCaretDown className={styles.icon} />
    </p>
  );
};

export default Dropdown;
