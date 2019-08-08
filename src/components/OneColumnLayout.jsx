import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';

const OneColumnLayout = ({ pageTitle, children }) => {
  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="container-fluid overflow-auto">
        <div className="pt-3">
          <h1 className="entry-title">{pageTitle}</h1>

          <div className="entry-content">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

OneColumnLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default OneColumnLayout;
