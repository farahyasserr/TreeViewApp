import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../../theme/Colors';
import {MinusCircle, PlusCircle} from 'lucide-react-native';

interface Props {
  isExpanded: boolean;
  onPressExpand: () => void;
}

function ExpandCategoryIcon(props: Props) {
  const {isExpanded, onPressExpand} = props;

  return (
    <TouchableOpacity onPress={onPressExpand}>
      {isExpanded ? (
        <MinusCircle size={23} color={colors.black} />
      ) : (
        <PlusCircle size={23} color={colors.black} />
      )}
    </TouchableOpacity>
  );
}

export default ExpandCategoryIcon;
