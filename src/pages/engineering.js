import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import MDX from "../components/MDX";

require("katex/dist/katex.css");

const EngineeringPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <main>
        <h1>Engineering success</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default EngineeringPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/engineering/index.mdx/" }) {
      body
    }
  }
`;
