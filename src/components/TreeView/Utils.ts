import {NestedItem} from '../../types/Products';

export const selectItemAndItsChildren = (
  item: NestedItem,
  selectedItemsIds: number[],
) => {
  const childrenIdsToAdd = getChildren(item);
  let result = [
    ...selectedItemsIds,
    item.id,
    childrenIdsToAdd && childrenIdsToAdd,
  ].flat();
  result.filter(itemId => !selectedItemsIds.includes(itemId));
  return result;
};

export const unselectItemAndItsChildren = (
  item: NestedItem,
  selectedItemsIds: number[],
) => {
  const childrenIdsToRemove = getChildren(item);

  // Removing item
  let result = selectedItemsIds.filter(itemId => itemId !== item.id);

  // Removing children if exists
  if (childrenIdsToRemove)
    result = result.filter(itemId => !childrenIdsToRemove.includes(itemId));

  return result;
};

export const getChildren = (item: NestedItem) => {
  let childrenIds: any = [];

  if (item.elements) {
    // Item has children
    item.elements.forEach(item => {
      childrenIds.push(item.id); //push if not already there to avoid duplicates
      let ids = getChildren(item); //get children again
      childrenIds = [...childrenIds, ...ids]; // Concatenate child IDs to parent array
    });
    return childrenIds;
  } else {
    return [];
  }
};
