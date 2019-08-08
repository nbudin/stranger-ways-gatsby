import React from "react";
import { graphql } from 'gatsby';
import OneColumnLayout from "../components/OneColumnLayout";

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

export default function MusicPage({ data }) {
  return (
    <OneColumnLayout pageTitle={data.page.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </OneColumnLayout>
  )
};
