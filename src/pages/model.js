import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const ModelPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Model</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default ModelPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/model/index.mdx/" }) {
      body
    }
  }
`;
