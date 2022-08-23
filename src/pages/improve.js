import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const ImprovePage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Improvement of an Existing Part</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default ImprovePage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/improve/index.mdx/" }) {
      body
    }
  }
`;
