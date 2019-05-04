import React from 'react';
import PropTypes from 'prop-types';

import Employee from '../components/Employee.jsx';

const EmployeesContainer = ({ employees }) => (
  <div className="employees-container">
    {/* Employees Container */}
    {employees.map(emp => (
      <Employee name={emp.name} />
    ))}
  </div>
);

EmployeesContainer.propTypes = {
  employees: PropTypes.array,
};

export default EmployeesContainer;
