import React from 'react';
import PropTypes from 'prop-types';

const Pane = ({ name, title, alias, full }) => (
  <div className="pane">
    <img src={full} alt={name} />
    <div className="info">
      <div className="inner-info">
        <div>
          <strong>Name:</strong>
        </div>
        <div>{name}</div>
      </div>
      <div className="inner-info">
        <div>
          <strong>Title:</strong>
        </div>
        <div>{title}</div>
      </div>
      <div className="inner-info">
        <div>
          <strong>Alias:</strong>
        </div>
        <div>{alias}</div>
      </div>
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
