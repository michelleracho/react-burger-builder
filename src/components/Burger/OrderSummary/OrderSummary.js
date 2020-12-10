import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span
            style={{
              textTransform: 'capitalize'
            }}
          >
            {ingredientKey}
          </span>
          :{props.ingredients[ingredientKey]}
        </li>
      );
    }
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ margin: '1rem 3rem' }}>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default OrderSummary;
