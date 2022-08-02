import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const EducationPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Education</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default EducationPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/education/index.mdx/" }) {
      body
    }
  }
`;
