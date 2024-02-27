import React from 'react';
import {FlatList, Text} from 'react-native';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem.view';
import {NestedItem} from '../../types/Products';
import styles from './TreeView.styles';

interface Props {
  list: NestedItem[];
  onSelectCheckBox: (item: NestedItem) => void;
  selectedItemsIds: number[];
}

function TreeView({list, onSelectCheckBox, selectedItemsIds}: Props) {
  const renderItem = ({item}: {item: NestedItem}) => {
    return (
      <CheckBoxItem
        data={item}
        onSelectCheckBox={onSelectCheckBox}
        selectedItems={selectedItemsIds}
      />
    );
  };

  const listHeaderComponent = () => (
    <Text style={styles.listHeaderTitle}>Products Tree View</Text>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeaderComponent}
    />
  );
}

export default TreeView;
