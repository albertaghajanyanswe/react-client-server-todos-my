import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PropTypes from 'prop-types';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {product.image && (
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
      )}
      <CardContent>
        <div className={classes.cardContent}>
        <Typography variant="h6">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="h5"> {product.price} </Typography>
        <Button> BUY </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default Product;
