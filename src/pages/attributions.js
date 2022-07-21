import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

require("katex/dist/katex.css");

const AttributionsPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Attributions</h1>

        <MDXProvider components={{}}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
    </Layout>
  );
};

export default AttributionsPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/attributions/index.mdx/" }) {
      body
    }
  }
`;
