import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        © 2022 - Content on this site is licensed under a{" "}
        <a
          class="subfoot"
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="license"
        >
          Creative Commons Attribution 4.0 International license
        </a>
        .
      </p>
      <p>
        The repository used to create this website is available at{" "}
        <a href="https://gitlab.igem.org/2022/mit">gitlab.igem.org/2022/mit</a>.
      </p>
    </footer>
  );
};

export default Footer;
