/*
 * This file's purpose is it to modularize the code for outside use
 * and cleaner code
 */

/**
 *
 * @param {array} newQueue
 * @param {number} index
 * @param {object} newEmp
 * This function will check whether the PaneContainer needs to render
 * different Panes or not.
 * In other words, if the clicked employee doesn't exist or if the clicked employee
 * is the last element of the newQueue, take the employee out and place it in the front of the newQueue array.
 * If the clicked employee is in the middle (element 1) of the array, just simply swap with the element 0.
 * If the clicked employee is already in the place of element 0, no changes necessary.
 *
 * If the index does not exist or if the index is the last element of newQueue,
 * pop the element from the array and add the newEmp object to the front of the array.
 * If the index is 1 (that means it's in the middle), swap the element 0 and element 1
 * If the index is at element 0, no necessary changes needed.
 */
export const rearrangePane = (newQueue, index, newEmp) => {
  let changes = true;

  if (index < 0 || index === 2) {
    newQueue.pop();
    newQueue.unshift(newEmp);
  } else if (index === 1) {
    const temp = newQueue[1];
    newQueue[1] = newQueue[0];
    newQueue[0] = temp;
  } else {
    changes = false;
  }

  return changes;
};
/**
 *
 * @param {array} employees
 * @param {array} newQueue
 * Traverse through the employees array and check to see if any of those employees
 * are in the newQueue array, if not, assign false to its active key
 * If the employee does exist within newQueue, assign true to its active key
 */
export const checkActive = (employees, newQueue) => {
  const modifyEmployees = employees.slice(0);
  modifyEmployees.forEach((emp, i) => {
    if (newQueue.findIndex(active => active.name === emp.name) < 0) {
      modifyEmployees[i].active = false;
    } else {
      modifyEmployees[i].active = true;
    }
  });
  return modifyEmployees;
};
