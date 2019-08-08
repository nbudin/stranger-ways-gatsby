import React from "react";
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import OneColumnLayout from "../components/OneColumnLayout";

export const query = graphql`
query($slug: String!) {
  imageSharp(fields: { slug: { eq: $slug } }) {
    fields {
      album
      albumTitle
      slug
    }

    parent {
      ...on File {
        publicURL
      }
    }

    fluid(maxWidth: 950) {
      ...GatsbyImageSharpFluid
    }
  }

  allImageSharp(filter: { fields: { collection: { eq: "photos" } } }, sort: {
    fields: [fields___album, fields___slug]
  }) {
    edges {
      next {
        fields {
          slug
          album
        }
      }

      previous {
        fields {
          slug
          album
        }
      }

      node {
        fields {
          slug
          album
        }
      }
    }
  }
}
`;

export default function PhotoPage({ data }) {
  const edgeInOrderedList = data.allImageSharp.edges.find(edge => (
    edge.node.fields.slug === data.imageSharp.fields.slug
  ));

  const previousSlug = (
    edgeInOrderedList.previous && edgeInOrderedList.previous.fields.album === edgeInOrderedList.node.fields.album
      ? edgeInOrderedList.previous.fields.slug
      : null
  );

  const nextSlug = (
    edgeInOrderedList.next && edgeInOrderedList.next.fields.album === edgeInOrderedList.node.fields.album
      ? edgeInOrderedList.next.fields.slug
      : null
  );

  return (
    <OneColumnLayout>
      <div className="d-flex align-items-center">
        <div>
          {previousSlug
            ? (
              <Link className="btn btn-light border mr-1" to={previousSlug}>
                <span className="h1">&laquo;</span>
              </Link>
            )
            : <div className="btn btn-light border mr-1 disabled"><span className="h1">&laquo;</span></div>
          }
        </div>
        <div className="flex-grow-1">
          <a href={data.imageSharp.parent.publicURL}>
            <Img fluid={data.imageSharp.fluid} />
          </a>
        </div>
        <div>
          {nextSlug
            ? (
              <Link className="btn btn-light border ml-1" to={nextSlug}>
                <span className="h1">&raquo;</span>
              </Link>
            )
            : <div className="btn btn-light border ml-1 disabled"><span className="h1">&raquo;</span></div>
          }
        </div>
      </div>
    </OneColumnLayout>
  )
};
