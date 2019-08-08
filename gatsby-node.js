/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { titleize } = require('inflected');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const { sourceInstanceName } = fileNode; // 'music', 'posts'
    const slug = (
      node.frontmatter.permalink ||
      `/${sourceInstanceName}${createFilePath({ node, getNode, basePath: sourceInstanceName })}`
    );
    createNodeField({
      node,
      name: `collection`,
      value: sourceInstanceName,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  } else if (node.internal.type === 'ImageSharp') {
    const fileNode = getNode(node.parent);
    const { sourceInstanceName } = fileNode; // 'images', 'photos'
    createNodeField({
      node,
      name: 'collection',
      value: sourceInstanceName,
    });

    if (sourceInstanceName === 'photos') {
      const { relativeDirectory } = fileNode;
      const slug = `/${sourceInstanceName}${createFilePath({ node, getNode, basePath: sourceInstanceName })}`;

      createNodeField({
        node,
        name: 'album',
        value: relativeDirectory,
      });

      createNodeField({
        node,
        name: 'albumTitle',
        value: titleize(relativeDirectory.replace(/-/g, ' '))
      });

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
            collection
          }
        }
      }

      allImageSharp(filter: { fields: { collection: { eq: "photos" } } }) {
        nodes {
          fields {
            album
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.collection}-page.jsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const albums = new Set(result.data.allImageSharp.nodes.map(node => node.fields.album));
  albums.forEach(album => {
    createPage({
      path: `/photos/${album}/`,
      component: path.resolve(`./src/templates/album-page.jsx`),
      context: {
        album,
      },
    });
  });

  result.data.allImageSharp.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/photo-page.jsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
