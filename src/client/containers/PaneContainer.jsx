import React from 'react';
import PropTypes from 'prop-types';
import Pane from '../components/Pane.jsx';

const PaneContainer = ({ paneQueue }) => (
  <div className="pane-container">
    {paneQueue.map(emp => (
      <Pane
        name={emp.name}
        title={emp.title}
        alias={emp.alias}
        full={emp.full}
      />
    ))}
  </div>
);

PaneContainer.propTypes = {
  paneQueue: PropTypes.array,
};

export default PaneContainer;
