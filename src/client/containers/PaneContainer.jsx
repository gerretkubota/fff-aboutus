import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pane from '../components/Pane.jsx';

/**
 *
 * @component {TransitionGroup}
 * Manages a list of transition components
 * Manages the mounting and unmounting of components over time
 * @component {CSSTransition}
 * Helps add the animations/css when the component enters/exits
 * It will look through the CSS file and find the corresponding "status" of the component
 * If the component is in the entering process it will find move-enter
 * and when it's active it'll look for move-enter-active, vice versa for exit
 */
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
