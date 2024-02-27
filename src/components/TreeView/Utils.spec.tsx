import {
  getChildren,
  selectItemAndItsChildren,
  unselectItemAndItsChildren,
} from './Utils';
import {NestedItem} from '../../types/Products';

describe('selectItemAndItsChildren', () => {
  it('should select item and its children', () => {
    const item: NestedItem = {
      id: 1,
      title: 'Parent Item',
      elements: [
        {
          id: 2,
          title: 'Child Item 1',
          elements: [
            {
              id: 3,
              title: 'Grandchild Item 1',
            },
          ],
        },
        {
          id: 4,
          title: 'Child Item 2',
        },
      ],
    };

    const selectedItemsIds = [5, 6]; // Sample selected item IDs

    const expectedResult = [5, 6, 1, 2, 3, 4]; // Expected result after selecting item and its children

    const result = selectItemAndItsChildren(item, selectedItemsIds);

    expect(result).toEqual(expectedResult);
  });

  it('should only select itself because no children are found', () => {
    const item: NestedItem = {
      id: 4,
      title: 'Child Item 2',
    };

    const selectedItemsIds = [5, 6]; // Sample selected item IDs

    const expectedResult = [5, 6, 4]; // Expected result after selecting item and its children

    const result = selectItemAndItsChildren(item, selectedItemsIds);

    expect(result).toEqual(expectedResult);
  });
});

describe('unselectItemAndItsChildren', () => {
  it('should unselect item and its children', () => {
    const item: NestedItem = {
      id: 1,
      title: 'Parent Item',
      elements: [
        {
          id: 2,
          title: 'Child Item 1',
          elements: [
            {
              id: 3,
              title: 'Grandchild Item 1',
            },
          ],
        },
        {
          id: 4,
          title: 'Child Item 2',
        },
      ],
    };

    const selectedItemsIds = [1, 2, 3, 4, 5, 6]; // Sample selected item IDs

    const expectedResult = [5, 6]; // Expected result after unselecting item and its children

    const result = unselectItemAndItsChildren(item, selectedItemsIds);

    expect(result).toEqual(expectedResult);
  });
});

describe('getChildren', () => {
  it('should return an array of child IDs', () => {
    const item: NestedItem = {
      id: 1,
      title: 'Parent Item',
      elements: [
        {
          id: 2,
          title: 'Child Item 1',
        },
        {
          id: 3,
          title: 'Child Item 2',
          elements: [
            {
              id: 4,
              title: 'Grandchild Item 1',
            },
            {
              id: 5,
              title: 'Grandchild Item 2',
            },
          ],
        },
      ],
    };

    const expectedResult = [2, 3, 4, 5]; // Expected array of child IDs

    const result = getChildren(item);

    expect(result).toEqual(expectedResult);
  });
});
