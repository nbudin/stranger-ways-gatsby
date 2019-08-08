import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import SEO from './seo';
import SidebarContent from './SidebarContent';

const PageLayout = ({ pageTitle, children }) => {
  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="container-fluid overflow-auto">
        <div className="row pt-3">
          <div className="col-md-8">
            <h1 className="entry-title">{pageTitle}</h1>

            <div className="entry-content">
              {children}
            </div>
          </div>

          <div className="col-md-3 offset-md-1">
            <SidebarContent />
          </div>
        </div>
      </div>
    </Layout>
  )
}

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PageLayout
