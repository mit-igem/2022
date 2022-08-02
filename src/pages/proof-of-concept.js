import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const ProofOfConceptPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Proof of concept</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default ProofOfConceptPage;

export const pageQuery = graphql`
  query {
    mdx(
      fileAbsolutePath: { regex: "/.*/_content/proof-of-concept/index.mdx/" }
    ) {
      body
    }
  }
`;
