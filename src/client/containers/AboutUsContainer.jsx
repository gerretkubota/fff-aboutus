import React, { Component } from 'react';

import employeeData from '../data/data.json';

import EmployeesContainer from './EmployeesContainer.jsx';

export default class AboutUsContainer extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    const employees = [];
    const empData = employeeData.employees;
    for (let i = 0; i < empData.length; i++) {
      employees.push({
        name: empData[i].name,
        url: empData[i].url,
        description: empData[i].description,
      });
    }
    this.setState({ employees }, () => {
      console.log('harro');
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <div className="aboutus-container">
        <EmployeesContainer employees={employees} />
      </div>
    );
  }
}
