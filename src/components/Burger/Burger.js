import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import styles from './Burger.module.css';

const Burger = props => {
  // convert ingredients state (object) to an array of arrays
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      // groups each ingredient type to its own array
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    // flatten the 2d array to a 1d array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
