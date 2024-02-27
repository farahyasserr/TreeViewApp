import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './src/screens';
import {colors} from './src/theme/Colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: colors.background},
});
export default App;
