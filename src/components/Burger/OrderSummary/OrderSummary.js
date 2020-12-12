import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

import styles from './OrderSummary.module.css';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
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
          {props.ingredients[ingredientKey]}
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
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>

      <div className={styles.OrderSummaryContinue}>
        <p>Continue to Checkout?</p>
        <div>
          <Button btnType="Danger" click={props.cancel}>
            CANCEL
          </Button>
          <Button btnType="Success" click={props.continue}>
            CONTINUE
          </Button>
        </div>
      </div>
    </Aux>
  );
};

export default OrderSummary;
