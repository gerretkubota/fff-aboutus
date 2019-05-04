import React from 'react';

import PropTypes from 'prop-types';

const Employee = ({ name }) => <div className="employee">{name}</div>;

Employee.propTypes = {
  name: PropTypes.string,
};

export default Employee;
