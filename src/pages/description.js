import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const DescriptionPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Description</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default DescriptionPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/description/index.mdx/" }) {
      body
    }
  }
`;
