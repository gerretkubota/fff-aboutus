import React from 'react';
import PropTypes from 'prop-types';

const Pane = ({ name, title, alias, full }) => (
  <div className="pane">
    <img src={full} alt={name} />
    <div className="info">
      <div>{name}</div>
      <div>{title}</div>
      <div>{alias}</div>
    </div>
  </div>
);

Pane.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  alias: PropTypes.string,
  full: PropTypes.string,
};

export default Pane;
