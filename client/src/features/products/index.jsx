import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import M from 'messages';
import styles from './styles';
import PageTitle from 'components/pageTitle';
import Product from './product/product';

const Products = ({ title }) => {
  console.log(title);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const productsData = [
    {
      id: 1,
      name: 'Product 1',
      price: '$100',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$200',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://source.unsplash.com/random/300x300',
    }
  ];

  return (
    <div className={classes.content}>
      <PageTitle>{M.get(title)}</PageTitle>

      <Grid mt={2} spacing={3} container className={classes.itemsContent}>
        {productsData.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Products;
