import React from "react";
import { graphql } from 'gatsby';
import PageLayout from "../components/PageLayout";

export const query = graphql`
query($slug: String!) {
  page: markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`;

export default function PostsPage({ data }) {
  return (
    <PageLayout pageTitle={data.page.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </PageLayout>
  );
};
