import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function GAFTCover() {
  const data = useStaticQuery(graphql`
    query GAFTCover {
      gaftCover: file(relativePath: { eq: "GAFT-cover-final-112x112.jpg" }) {
        childImageSharp {
          fixed(width: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.gaftCover.childImageSharp.fixed} alt="Guilt, Angst & Fairy Tales Cover" />;
}

