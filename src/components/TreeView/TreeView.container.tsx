import React, {useState} from 'react';
import TreeView from './TreeView.view';
import {NestedItem} from '../../types/Products';
import {selectItemAndItsChildren, unselectItemAndItsChildren} from './Utils';

interface Props {
  list: NestedItem[];
}

function TreeViewContainer({list}: Props) {
  const [selectedItemsIds, setSelectedItemsIds] = useState<number[]>([]);

  const onSelectCheckBox = (item: NestedItem) => {
    let updatedSelectedIds;
    if (selectedItemsIds.includes(item.id)) {
      // Remove ID since it's already there
      updatedSelectedIds = unselectItemAndItsChildren(item, selectedItemsIds);
    } else {
      // Add ID since it's not there
      updatedSelectedIds = selectItemAndItsChildren(item, selectedItemsIds);
    }
    setSelectedItemsIds(updatedSelectedIds);
  };

  return (
    <TreeView
      list={list}
      selectedItemsIds={selectedItemsIds}
      onSelectCheckBox={onSelectCheckBox}
    />
  );
}

export default TreeViewContainer;
