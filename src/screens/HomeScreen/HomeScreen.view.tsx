import React from 'react';
import {View} from 'react-native';
import styles from './HomeScreen.styles';
import {NestedItem} from '../../types/Products';
import {EmptyList, TreeView} from '../../components';
interface Props {
  productsList: NestedItem[];
}
function HomeScreenView({productsList}: Props) {
  return (
    <View style={styles.mainContainer}>
      {productsList ? <TreeView list={productsList} /> : <EmptyList />}
    </View>
  );
}

export default HomeScreenView;
