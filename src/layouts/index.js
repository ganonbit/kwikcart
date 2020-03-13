import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../style/index.scss';

const Layout = ({ children, site }) => (
  <div>
    <Helmet title='kwikcart' />
    <div className='container'>
      <div className='header'>
        <div className='wrapper'>
          <div className='header-body'>
            <h1 className='header-title'>
              <Link data-text={site.siteMetadata.siteName} to='/'>
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className='header-summary snipcart-summary snipcart-checkout'>
              <div className='header-summary-title'>Cart</div>
              <div className='header-summary-line'>
              Items In Cart: <span className='snipcart-total-items'></span>
              </div>
              <div className='header-summary-line'>
                Total Price: <span className='snipcart-total-price'>$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper'>{children}</div>
      <div className='wrapper'>
        <div className='footer'>kwikcart 2020&copy;</div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
