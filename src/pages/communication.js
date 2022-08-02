import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const CommunicationPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Communication</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default CommunicationPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/communication/index.mdx/" }) {
      body
    }
  }
`;
