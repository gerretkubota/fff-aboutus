import React from 'react';

import PropTypes from 'prop-types';

const Employee = ({ name, handleClick }) => (
  <div className="employee" onClick={handleClick(name)}>
    {name}
  </div>
);

Employee.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Employee;
