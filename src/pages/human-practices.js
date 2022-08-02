import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const HumanPracticesPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Human Practices</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default HumanPracticesPage;

export const pageQuery = graphql`
  query {
    mdx(
      fileAbsolutePath: { regex: "/.*/_content/human-practices/index.mdx/" }
    ) {
      body
    }
  }
`;
