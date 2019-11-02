/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './components/Header';

const App = () => {
  const [valNumber, setValNumber] = useState(0);
  const number = tipo => {
    if (tipo) {
      setValNumber(valNumber + 1);
    } else {
      if (valNumber > 0) {
        setValNumber(valNumber - 1);
      }
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.corBack}>
        <View style={styles.textDisp}>
          <Text style={styles.dispText}>DISPLAY</Text>
        </View>
        <View style={styles.valNumber}>
          <Text style={styles.dispText}>{valNumber}</Text>
        </View>
      </View>

      <View style={styles.corBack}>
        <ActionButton
          renderIcon={active =>
            active ? (
              <Icon name="md-cut" style={styles.actionButtonIcon} />
            ) : (
              <Icon name="md-remove" style={styles.actionButtonIcon} />
            )
          }
          position="left"
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            number(false);
          }}
        />
        <ActionButton
          renderIcon={active =>
            active ? (
              <Icon name="md-cut" style={styles.actionButtonIcon} />
            ) : (
              <Icon name="md-add" style={styles.actionButtonIcon} />
            )
          }
          position="right"
          buttonColor="#1abc9c"
          onPress={() => {
            number(true);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  dispText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  corBack: {
    flex: 1,
    backgroundColor: '#ebedec',
  },
  valNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#bccc56',
    width: 100,
    height: 50,
    borderRadius: 5,
  },
  textDisp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default App;
