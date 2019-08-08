import React from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import OneColumnLayout from "../components/OneColumnLayout";

export const query = graphql`
query($album: String!) {
  photos: allImageSharp(
    filter: { fields: {
      collection: { eq: "photos" },
      album: { eq: $album },
    } },
    sort: { fields: [fields___slug] }
  ) {
    nodes {
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

      fluid(maxWidth: 400, maxHeight: 400, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default function AlbumPage({ data }) {
  return (
    <OneColumnLayout pageTitle={data.photos.nodes[0].fields.albumTitle}>
      <div className="d-flex flex-wrap">
        {data.photos.nodes.map(node => (
          <div className="col-6 col-md-4 p-2">
            <a href={node.fields.slug}>
              <Img fluid={node.fluid} />
            </a>
          </div>
        ))}
      </div>
    </OneColumnLayout>
  )
};
