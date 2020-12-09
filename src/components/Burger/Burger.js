import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import styles from './Burger.module.css';

const Burger = props => {
  // convert ingredients state (object) to an array = ['salad', 'bacon', 'cheese','meat']
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      // groups each ingredient type to its own array
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    }
  );

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
