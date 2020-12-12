import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

import styles from './OrderSummary.module.css';

class OrderSummary extends Component {
  // check when this component is rendered
  componentDidUpdate() {
    // componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span
              style={{
                textTransform: 'capitalize',
                marginRight: '.25rem'
              }}
            >
              {ingredientKey}:
            </span>
            {this.props.ingredients[ingredientKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul className={styles.OrderSummaryUl}>{ingredientSummary}</ul>

        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>

        <div className={styles.OrderSummaryContinue}>
          <p>Continue to Checkout?</p>
          <div>
            <Button btnType="Danger" click={this.props.cancel}>
              CANCEL
            </Button>
            <Button btnType="Success" click={this.props.continue}>
              CONTINUE
            </Button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
