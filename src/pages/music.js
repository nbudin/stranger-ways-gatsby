import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import OneColumnLayout from '../components/OneColumnLayout';
import GAFTCover from '../components/GAFTCover';
import SATGCover from '../components/SATGCover';

function MusicPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title] },
        filter: {fields: {slug: {regex: "/^\/music/"}}}
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
    <OneColumnLayout pageTitle="Music">
      <div className="row">
        <div className="col-md-8">
          <section className="mb-4">
            <h2>Albums</h2>
            <div class="d-flex">
              <a href="http://strangerways.bandcamp.com/album/guilt-angst-fairy-tales" className="card bg-light text-dark p-2 mr-2">
                <GAFTCover />
                <div><strong>Guilt, Angst &amp;<br /> Fairy Tales</strong></div>
                <i>2012</i>
              </a>
              <a href="http://strangerways.bandcamp.com/album/strangers-at-the-gate" className="card bg-light text-dark p-2">
                <SATGCover />
                <div><strong>Strangers at<br />the Gate</strong></div>
                <i>2011</i>
              </a>
            </div>
          </section>
          <section>
            <h2>Demos</h2>
            <p>We have some unpublished demo recordings you can listen to if you like.  They're <a href="http://strangerways.bandcamp.com/album/unpublished-demos">up on Bandcamp</a>.</p>
          </section>
        </div>

        <div className="col-md-4">
          <h2>
            Songs
          </h2>
          <p>
            Including lyrics, chords, sheet music, and links to albums and videos.
          </p>
          <ul>
            {data.allMarkdownRemark.nodes.map(node => (
              <li>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OneColumnLayout>
  );
}

export default MusicPage;
