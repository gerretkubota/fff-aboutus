import React from 'react';
import PropTypes from 'prop-types';

import Employee from '../components/Employee.jsx';

const EmployeesContainer = ({ employees, handleClick }) => (
  <div className="employees-container">
    {employees.map(emp => (
      <Employee
        key={emp.name}
        name={emp.name}
        thumb={emp.thumb}
        handleClick={handleClick}
        active={emp.active}
      />
    ))}
  </div>
);

EmployeesContainer.propTypes = {
  employees: PropTypes.array,
  handleClick: PropTypes.func,
};

export default EmployeesContainer;
