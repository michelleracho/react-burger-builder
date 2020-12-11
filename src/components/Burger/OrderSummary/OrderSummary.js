import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
      <ul style={{ margin: '1rem 3rem' }}>{ingredientSummary}</ul>

      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p style={{ display: 'inline-block', marginRight: '2rem' }}>
        Continue to Checkout?
      </p>

      <Button btnType="Danger" click={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
