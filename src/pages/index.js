import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import PageLayout from "../components/PageLayout";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      bandPic: file(relativePath: { eq: "stranger-ways-2.0/IMG_5398.jpg" }) {
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
            <h2>Upcoming!</h2>
            <ul>
              <li>
                <strong>Shows:</strong>
                {' '}
                No shows currenly scheduled.
              </li>
              <li><strong>Album:</strong> We’re currently working on&nbsp;<em>Iron and Rust</em>, a folk-rock opera about humans and faeries. &nbsp;More information soon!</li>
            </ul>
          </section>
        </div>
        <div className="col-4">
          <Link to="/photos/stranger-ways-2.0">
            <Img fluid={data.bandPic.childImageSharp.fluid} alt="Stranger Ways 2.0 in an elevator" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default IndexPage
