import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  // purchaseable = true if at least one ingredient is added
  updatePurchaseState(ingredients) {
    // const ingredients = { ...this.state.ingredients }; // not ideal because this is not always right away reflect the updated ingredients
    // convert ingredients to an array of values
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      // sum all values
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = type => {
    // update ingredients
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    // update total price
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    // update ingredients
    const oldCount = this.state.ingredients[type];
    // do nothing if there is nothing to deduct
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    // update total price
    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  // show OrderSummary modal
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  // close OrderSummary modal
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // continue purchase
  purchaseContinueHandler = () => {
    alert('CONTINUE!!');
  };

  render() {
    // true/false depending if value <= 0 for that key/ingredient - {salad: true, meat: false, ...}
    // pass to BuildControls to BuildControl and disable LESS btn on ingredient if value is true
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={!this.state.purchaseable}
          price={this.state.totalPrice}
          order={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
