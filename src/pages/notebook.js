import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const NotebookPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Lab notebook</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default NotebookPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/notebook/index.mdx/" }) {
      body
    }
  }
`;
