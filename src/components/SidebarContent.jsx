import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import GAFTCover from './GAFTCover';
import SATGCover from './SATGCover';

function SidebarContent() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [fields___slug], order: DESC },
        filter: {fields: {collection: {eq: "posts"}}},
        limit: 5
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
    <>
      <section>
        <h3>Albums</h3>
        <div style={{ textAlign: 'center' }}>
          <p>
            <a href="http://strangerways.bandcamp.com/album/guilt-angst-fairy-tales">
              <GAFTCover />
            </a>
            <br />
            <a href="http://strangerways.bandcamp.com/album/guilt-angst-fairy-tales">
              <small><em>Guilt, Angst &amp; Fairy Tales</em> - 2012</small>
            </a>
          </p>
          <p>
            <a href="http://strangerways.bandcamp.com/album/strangers-at-the-gate">
              <SATGCover />
            </a>
            <br />
            <a href="http://strangerways.bandcamp.com/album/strangers-at-the-gate">
              <small><em>Strangers at the Gate</em> - 2011</small>
            </a>
          </p>
        </div>
      </section>
      <section className="mt-4">
        <h3>Latest News</h3>
        <ul>
          {data.allMarkdownRemark.nodes.map(node => (
            <li>
              <a href={node.fields.slug}>{node.frontmatter.title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-4">
        <h3>Contact Us</h3>
        <p><a href="mailto:info@stranger-ways.com">info@stranger-ways.com</a></p>
      </section>
      <section className="mt-4">
        <h3>Mailing List</h3>
        <small>The best way to be notified of upcoming shows and releases.</small>
        <a href="http://eepurl.com/biAXaf" className="btn btn-secondary">Sign up for the mailing list</a>
      </section>
      <section className="mt-4">
        <h3>The Social Medias</h3>
        <a href="http://www.facebook.com/pages/Stranger-Ways/111927082201681" className="btn btn-light border text-left" target="_TOP" title="Stranger Ways">
          <img src="http://badge.facebook.com/badge/111927082201681.609.1279471520.png" alt="Follow us on Facebook"
            width={16} height={16} style={{ border: '0px', marginLeft: '20px' }}
          />
          <small>
            {' '}
            Like us on Facebook
          </small>
        </a>
      </section>
    </>
  )
};

export default SidebarContent;
