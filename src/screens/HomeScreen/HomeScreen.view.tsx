import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.styles';

interface Props {}

function HomeScreenView(props: Props) {
  const {} = props;

  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreenView;
