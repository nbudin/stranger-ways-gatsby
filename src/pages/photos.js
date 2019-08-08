import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import OneColumnLayout from '../components/OneColumnLayout';

function PhotosPage() {
  const data = useStaticQuery(graphql`
    query {
      photos: allImageSharp(
        filter: { fields: { collection: { eq: "photos" } } },
        sort: { fields: [fields___slug], order: DESC }
      ) {
        nodes {
          fields {
            album
            albumTitle
          }

          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const albums = new Set(data.photos.nodes.map(node => node.fields.album));
  const albumPosters = [...albums].sort().map(album => data.photos.nodes.find(node => (
    node.fields.album === album
  )));

  return (
    <OneColumnLayout pageTitle="Photos">
      <div className="d-flex flex-wrap">
        {albumPosters.map(node => (
          <div className="col-6 col-md-4">
            <Link to={`/photos/${node.fields.album}`}>
              <Img fluid={node.fluid} />
              <strong>{node.fields.albumTitle}</strong>
            </Link>
          </div>
        ))}
      </div>
    </OneColumnLayout>
  );
}

export default PhotosPage;
