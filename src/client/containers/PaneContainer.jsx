import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pane from '../components/Pane.jsx';

const PaneContainer = ({ paneQueue }) => (
  <TransitionGroup className="pane-container">
    {paneQueue.map(emp => (
      <CSSTransition key={emp.name} timeout={500} classNames="move">
        <Pane
          key={emp.name}
          name={emp.name}
          title={emp.title}
          alias={emp.alias}
          full={emp.full}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

PaneContainer.propTypes = {
  paneQueue: PropTypes.array,
};

export default PaneContainer;
