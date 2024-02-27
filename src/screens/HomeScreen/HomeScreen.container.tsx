import React from 'react';
import HomeScreenView from './HomeScreen.view';
import {productMockData} from '../../data/Products';

function HomeScreen() {
  const productsData = productMockData.categories;

  return <HomeScreenView productsList={productsData} />;
}

export default HomeScreen;
