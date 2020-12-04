import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Activity6: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'mediumaquamarine' }]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'crimson' }]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  child: {
    width: 80,
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Activity6;
