import * as React from "react";
import { graphql, type HeadFC } from "gatsby";

interface PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data)
  return (
    <main style={{ padding: "10%" }}>
      <h1>{data.markdownRemark.frontmatter.title}</h1> 
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> 
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/policy.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
