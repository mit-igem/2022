import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "gatsby";
import * as styles from "../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentLimit}>
        <Link to="/">
          <h1 className={styles.logo}>MIT iGEM 2022</h1>
        </Link>

        <nav className={styles.nav}>
          <Dropdown label="Team">
            <Link to="/team">Team</Link>
            <Link to="/attributions">Attributions</Link>
            <Link to="/collaborations">Collaboration</Link>
          </Dropdown>
          <Dropdown label="Project">
            <Link to="/communication">Communication</Link>
            <Link to="/contribution">Contribution</Link>
            <Link to="/description">Description</Link>
            <Link to="/engineering">Engineering</Link>
            <Link to="/experiments">Experiments</Link>
            <Link to="/implementation">Implementation</Link>
            <Link to="/notebook">Notebook</Link>
            <Link to="/proof-of-concept">Proof of concept</Link>
            <Link to="/results">Results</Link>
          </Dropdown>
          <Dropdown label="Parts">
            <Link to="/parts">Parts</Link>
            <Link to="/improve">Improvement</Link>
          </Dropdown>
          <Link to="/safety">Safety</Link>
          <Link to="/human-practices">Human Practices</Link>
          <Dropdown label="Awards">
            <Link to="/education">Education</Link>
            <Link to="/entrepreneurship">Entrepreneurship</Link>
            <Link to="/hardware">Hardware</Link>
            <Link to="/model">Model</Link>
            <Link to="/software">Software</Link>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
};

export default Header;
