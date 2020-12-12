import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

class Modal extends Component {
  // optimize performance by controlling when the Modal updates when OrderSummary updates
  // in BurgerBuilder, Modal wraps OrderSummary
  // Modal should only update when Order Now button is clicked - only update when this.props.show changes
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  // confirm the that there is no unnecessary updates
  componentWillUpdate() {
    console.log('[Modal] will update');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} close={this.props.closeModal} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
