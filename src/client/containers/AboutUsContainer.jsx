import React, { Component } from 'react';

import axios from 'axios';
import employeeData from '../data/data.json';
import { rearrangePane } from '../utils/helperFunctions.js';

import EmployeesContainer from './EmployeesContainer.jsx';
import PaneContainer from './PaneContainer.jsx';

export default class AboutUsContainer extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      paneQueue: [],
    };
  }

  componentDidMount() {
    const empData = employeeData.employees;
    this.gatherData(empData).then(employees => {
      const paneQueue = [employees[0], employees[1], employees[2]];
      this.setState({ employees, paneQueue });
    });
  }

  gatherData = async empData =>
    Promise.all(
      empData.map(async emp => {
        const response = await axios.get(`/api/characters?name=${emp}`);
        const data = response.data[0];
        const title = data.titles ? data.titles[0] : 'None';
        const alias = data.aliases ? data.aliases[0] : 'None';
        const employee = {
          name: data.name,
          title,
          alias,
        };
        return employee;
      })
    );

  handleClick = name => event => {
    event.preventDefault();

    const { paneQueue, employees } = this.state;
    const newQueue = paneQueue.slice(0);
    const index = newQueue.findIndex(emp => emp.name === name);
    const newEmp = employees.find(emp => emp.name === name);

    if (rearrangePane(newQueue, index, newEmp)) {
      this.setState({ paneQueue: newQueue });
    }
  };

  render() {
    const { employees, paneQueue } = this.state;
    return (
      <div className="aboutus-container">
        <PaneContainer paneQueue={paneQueue} />
        <EmployeesContainer
          employees={employees}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
