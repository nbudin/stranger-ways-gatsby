import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SATGCover() {
  const data = useStaticQuery(graphql`
    query SATGCover {
      satgCover: file(relativePath: { eq: "Stranger-Ways-CD-Cover-150x150.jpg" }) {
        childImageSharp {
          fixed(width: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.satgCover.childImageSharp.fixed} alt="Strangers at the Gate Cover" />;
}
