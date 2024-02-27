import React, {useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from './CheckBoxItem.styles';
import {NestedItem} from '../../types/Products';
import {Check} from 'lucide-react-native';
import {colors} from '../../theme/Colors';
import ExpandCategoryIcon from '../ExpandIcon';

interface Props {
  data: NestedItem;
  onSelectCheckBox: (item: NestedItem) => void;
  selectedItems: number[];
}

function CheckBoxItem({data, onSelectCheckBox, selectedItems}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isSelected = selectedItems.includes(data.id);
  const isParent: Boolean = data.elements ? data.elements.length > 0 : false;

  const renderItem = ({item}: {item: NestedItem}) => {
    return (
      <CheckBoxItem
        data={item}
        onSelectCheckBox={onSelectCheckBox}
        selectedItems={selectedItems}
      />
    );
  };

  const onPressExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.subContainer}>
          {isParent && (
            <ExpandCategoryIcon
              isExpanded={isExpanded}
              onPressExpand={onPressExpand}
            />
          )}
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => onSelectCheckBox(data)}
          style={styles.checkboxOuterBox}>
          {isSelected && <Check size={20} color={colors.primary} />}
        </TouchableOpacity>
      </View>
      {isParent && isExpanded && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.elements}
          style={styles.listIndentation}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
}

export default CheckBoxItem;
