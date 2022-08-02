import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const ImplementationPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Implementation</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default ImplementationPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/implementation/index.mdx/" }) {
      body
    }
  }
`;
