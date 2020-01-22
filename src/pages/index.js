import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import PageLayout from "../components/PageLayout";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      ironAndRustCover: file(relativePath: { eq: "iron-rust-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PageLayout pageTitle="Welcome">
      <div className="row">
        <div className="col-8">
          Stranger Ways is a dark modern folk band based in greater Boston. &nbsp;We play a mix of traditional and original music with heavy harmonies and a macabre sense of humor.

          <section className="mt-4">
            <h2>Listen to Stranger Ways</h2>
            <ul>
              <li><Link to="/music"><strong>Music:</strong> Our albums and demo recordings</Link></li>
              <li><a href="http://www.youtube.com/user/StrangerWaysMusic/featured/"><strong>Videos:</strong> Our concert videos on YouTube</a></li>
            </ul>
          </section>

          <section className="mt-4">
            <h2>Iron &amp; Rust is here!</h2>
            <p>
              Our long-awaited concept album, Iron &amp; Rust, is released!  Please check it out
              <a href="https://strangerways.bandcamp.com/album/iron-rust">on our Bandcamp page</a>.
            </p>
          </section>
        </div>
        <div className="col-4">
          <a href="https://strangerways.bandcamp.com/album/iron-rust">
            <Img fluid={data.ironAndRustCover.childImageSharp.fluid} alt="Iron &amp; Rust" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default IndexPage
