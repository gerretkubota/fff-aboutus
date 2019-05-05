export const rearrangePane = (newQueue, index, newEmp) => {
  const len = newQueue.length;
  let changes = true;

  if (len === 0) {
    newQueue.push(newEmp);
  } else if (len > 0 && len < 3) {
    if (index < 0) {
      newQueue.unshift(newEmp);
    } else if (index !== 0) {
      newQueue.unshift(newQueue.pop());
    } else {
      changes = false;
    }
  } else if (len === 3) {
    if (index === 1) {
      const temp = newQueue[1];
      newQueue[1] = newQueue[0];
      newQueue[0] = temp;
    } else if (index === 2 || index < 0) {
      newQueue.pop();
      newQueue.unshift(newEmp);
    } else {
      changes = false;
    }
  }

  return changes;
};
