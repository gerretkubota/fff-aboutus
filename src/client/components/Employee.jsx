import React from 'react';

import PropTypes from 'prop-types';

const Employee = ({ url }) => (
  <div className="employee">
    <img src={url} />
  </div>
);

Employee.propTypes = {
  url: PropTypes.string,
};

export default Employee;
