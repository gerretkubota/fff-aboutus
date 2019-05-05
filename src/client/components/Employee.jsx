import React from 'react';

import PropTypes from 'prop-types';

const Employee = ({ name, handleClick, thumb }) => (
  <div className="employee" onClick={handleClick(name, thumb)}>
    <img src={thumb} alt={name} />
  </div>
);

Employee.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  thumb: PropTypes.string,
};

export default Employee;
