import React, { Component } from 'react';

import axios from 'axios';
import employeeData from '../data/data.json';
import { rearrangePane, checkActive } from '../utils/helperFunctions.js';

import EmployeesContainer from './EmployeesContainer.jsx';
import PaneContainer from './PaneContainer.jsx';

export default class AboutUsContainer extends Component {
  constructor() {
    super();
    /**
     * employees state will hold all of the employee and their data that can be rendered through the pane
     * paneQueue state holds all of the current employees and their data that are displayed through the PaneContainer
     * *Note: The Pane and Employee component will respectively render in the order of the elements in paneQueue and employees*
     */
    this.state = {
      employees: [],
      paneQueue: [],
    };
  }

  /**
   * Gathering data from 3rd party API
   */
  componentDidMount() {
    const empData = employeeData.employees;
    this.gatherData(empData).then(employees => {
      const paneQueue = [employees[0], employees[1], employees[2]];
      this.setState({ employees, paneQueue });
    });
  }

  /**
   * @param {object} empData
   * Utilizing hardcoded list of employees to gather data for that specific employee through a 3rd party API.
   * After getting a response back from the end point, modularize the necessary data that as needed.
   * Get the employee's title and alias.
   * Create a employee object to store name, title, alias, full, and thumb (thumbnail pic).
   * In addition, if the characters are within the the range of 0 to 2, assign the value as true, else false
   * There is goinng to be multiple get calls and the promises are stored within an array so use Promise.all to resolve
   * Using async/await to gather data in a 'sync' way
   * *NOTE: The purpose of having the active key is to add drop-shadow effect for currently selected employees in the EmployeesContainer*
   */
  gatherData = async empData =>
    Promise.all(
      empData.map(async (emp, index) => {
        const response = await axios.get(`/api/characters?name=${emp.name}`);
        const data = response.data[0];
        const title = data.titles[0] !== '' ? data.titles[0] : 'None';
        const alias = data.aliases[0] !== '' ? data.aliases[0] : 'None';
        const { full } = emp;
        const { thumb } = emp;
        const active = index >= 0 && index <= 2;
        const employee = {
          name: data.name,
          title,
          alias,
          full,
          thumb,
          active,
        };
        return employee;
      })
    );

  /**
   * @param {string} name
   * Upon the click, check if that element's respective name is stored in the newQueue array.
   * Create a new object with the respective object and assign a key active with the value true
   * Invoke rearrangePane function *Please refer this function (rearrangePane) ot the helper function*
   * RearrangePane will check if the PaneContainer needs to render different Pane compoennts
   * If there is necessary changes needed, rearrangepane will already update newQueue with new Panes to render
   * If there has been changes through rearrangePane, invoke checkActive to change the key, active's value
   * *NOTE: The purpose of having the active key is to add drop-shadow effect for currently selected employees in the EmployeesContainer*
   */
  handleClick = name => event => {
    event.preventDefault();
    const { paneQueue, employees } = this.state;
    const newQueue = paneQueue.slice(0);
    const index = newQueue.findIndex(emp => emp.name === name);
    const newEmp = {
      ...employees.find(emp => emp.name === name),
      active: true,
    };

    if (rearrangePane(newQueue, index, newEmp)) {
      const modifyEmployees = checkActive(employees, newQueue);
      this.setState({ paneQueue: newQueue, employees: modifyEmployees });
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
