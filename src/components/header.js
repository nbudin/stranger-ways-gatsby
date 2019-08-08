import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "sw2.0-banner-21.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 198) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="container-fluid">
      <div id="header" className="row-fluid">
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Stranger Ways" />

        <nav className="navbar navbar-dark bg-dark row">
          <ul className="nav">
            <li>
              <Link to="/" className="nav-link h4 mb-0">Home</Link>
            </li>
            <li>
              <a className="nav-link h4 mb-0" href="https://www.youtube.com/user/StrangerWaysMusic/featured">Videos</a>
            </li>
            <li>
              <Link to="/music" className="nav-link h4 mb-0">Music</Link>
            </li>
            <li>
              <Link to="/photos" className="nav-link h4 mb-0">Photos</Link>
            </li>
            <li>
              <Link to="/shows" className="nav-link h4 mb-0">Shows</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link h4 mb-0">The Band</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
