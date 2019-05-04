import React from 'react';
import PropTypes from 'prop-types';

const Pane = ({ name, title, alias }) => (
  <div className="pane">
    <div>{name}</div>
    <div>{title}</div>
    <div>{alias}</div>
  </div>
);

Pane.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  alias: PropTypes.string,
};

export default Pane;
