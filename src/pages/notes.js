import * as React from "react";
import Layout from "../components/Layout";
import MDX from "../components/MDX";
import { graphql } from "gatsby";

require("katex/dist/katex.css");

const NotesPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>Notes</h1>

        <MDX body={data.mdx.body} />
      </main>
    </Layout>
  );
};

export default NotesPage;

export const pageQuery = graphql`
  query {
    mdx(fileAbsolutePath: { regex: "/.*/_content/notes/index.mdx/" }) {
      body
    }
  }
`;
