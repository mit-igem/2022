import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const CollaborationsPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Collaborations</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default CollaborationsPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/collaborations/index.mdx/" }) {
      body
    }
  }
`;
