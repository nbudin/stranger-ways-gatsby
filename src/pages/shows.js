import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import PageLayout from '../components/PageLayout';

function ShowsPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [fields___slug], order: DESC },
        filter: {
          fields: { collection: { eq: "posts" } },
          frontmatter: { tags: { eq: "shows" } }
        },
      ) {
        nodes {
          fields {
            slug
          }

          frontmatter {
            title
          }
        }
      }
    }
  `);

  return (
    <PageLayout pageTitle="Shows">
      <ul>
        {data.allMarkdownRemark.nodes.map(node => (
          <li>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default ShowsPage;
