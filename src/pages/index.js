import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';

export default () => (
  <StaticQuery
    query={graphql`
      query ListQuery {
        allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        <div className='list'>
          {data.allDatoCmsProduct.edges.map(({ node: product }) => (
            <div className='list-item' key={product.id}>
              <div className='product'>
                <div className='product-image'>
                  <img
                    src={`${product.image.url}`}
                  />
                </div>{' '}
                <div className='product-details'>
                  <div className='product-name'>
                    {product.name}
                    <div className='product-price'>${product.price}</div>
                  </div>
                  <span  
                    className='product-buy snipcart-add-item'
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`/`}
                  >
                  Add to cart
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);
