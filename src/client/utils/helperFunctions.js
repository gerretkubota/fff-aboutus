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
