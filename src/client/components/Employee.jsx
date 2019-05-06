import React from 'react';

import PropTypes from 'prop-types';

const Employee = ({ name, handleClick, thumb, active }) => (
  <div
    className={active ? 'employee shadow' : 'employee'}
    onClick={handleClick(name)}
  >
    <img src={thumb} alt={name} />
  </div>
);

Employee.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  thumb: PropTypes.string,
  active: PropTypes.bool,
};

export default Employee;
