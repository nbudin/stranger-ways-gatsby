import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function IronAndRustCover() {
  const data = useStaticQuery(graphql`
    query IronRustCover {
      ironRustCover: file(relativePath: { eq: "iron-rust-cover.jpg" }) {
        childImageSharp {
          fixed(width: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.ironRustCover.childImageSharp.fixed} alt="Iron &amp; Rust Cover" />;
}

