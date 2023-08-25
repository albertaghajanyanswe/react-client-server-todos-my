import React from 'react';
import { TextField, Grid, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomFormItem = ({ input, values, errors, handleChange }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const getInput = (item) => {
    switch (item.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'datetime-local':
        return (
          <Grid item xs={12}>
            <TextField
              {...item}
              classes={{ root: classes.item }}
              fullWidth
              variant={item.variant}
              id={item.id}
              value={values[item.name]}
              onChange={(e) => handleChange(e, input)}
              error={Boolean(errors[item.name])}
              helperText={errors[item.name]}
              InputProps={{
                ...(item.icon && {startAdornment: (<InputAdornment position="start"> {item.icon} </InputAdornment>)}),
              }}
              {...(item.type === 'datetime-local' && { InputLabelProps: { shrink: true } })}
            />
          </Grid>
        );
      default:
        return (
          <Grid item xs={12}>
            <TextField
              fullWidth
              classes={{ root: classes.item }}
              className={classes.item}
              {...item}
              value={values[item.name]}
              onChange={(e) => handleChange(e, input)}
              error={Boolean(errors[item.name])}
              helperText={errors[item.name]}
              InputProps={{
                ...(item.icon && {
                  startAdornment: (
                    <InputAdornment position="start">
                      {item.icon}
                    </InputAdornment>
                  ),
                }),
              }}
            />
          </Grid>
        );
    }
  };

  return getInput(input);
};

CustomFormItem.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ),
  values: PropTypes.shape({
    // TODO
  }).isRequired,
  errors: PropTypes.shape({
    // TODO
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

CustomFormItem.defaultProps = {
  inputs: [],
};

export default React.memo(CustomFormItem);