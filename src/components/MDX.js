import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const MDX = ({ body }) => (
  <MDXProvider components={{}}>
    <MDXRenderer>{body}</MDXRenderer>
  </MDXProvider>
);

export default MDX;
