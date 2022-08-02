import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const ContributionPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Contribution</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default ContributionPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/contribution/index.mdx/" }) {
      body
    }
  }
`;
