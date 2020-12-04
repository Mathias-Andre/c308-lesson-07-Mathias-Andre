import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProblemStatement: () => React$Node = () => {
  return (
    <View style={styles.parentOne}>
      <View style={[styles.topBar]}>
        <Text> </Text>
      </View>

      <View style={styles.parentTwo}>
        <View style={[styles.square]}>
          <Text> </Text>
        </View>
        <View style={[styles.nameLabel]}>
          <Text> </Text>
        </View>
      </View>

      <View style={[styles.buttonParent]}>
        <View style={[styles.leftButton]} />
        <View style={[styles.rightButton]} />
      </View>

      <View style={[styles.parentOne]}>
        <Text style={[styles.midBar]} />

        <View style={[styles.parentFour]}>
          <View style={[styles.square]} />
          <View style={[styles.square]} />
          <View style={[styles.square]} />
        </View>

        <View style={[styles.parentFour]}>
          <View style={[styles.square]} />
          <View style={[styles.square]} />
          <View style={[styles.square]} />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentOne: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    flex: 1,
  },
  topBar: {
    height: 25,
    backgroundColor: '#15576B',
  },

  parentTwo: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#AE8234',
  },
  nameLabel: {
    height: 30,
    backgroundColor: '#AE8234',
    paddingHorizontal: 70,
  },

  buttonParent: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  leftButton: {
    height: 78,
    backgroundColor: '#BA7d71',
    flex: 1,
  },
  rightButton: {
    height: 78,
    backgroundColor: '#509BC7',
    flex: 1,
  },

  midBar: {
    height: 13,
    backgroundColor: '#15576B',
  },

  parentFour: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  bottomBar: {
    height: 60,
    backgroundColor: '#509BC7',
    justifyContent: 'flex-end',
  },
});

export default ProblemStatement;
