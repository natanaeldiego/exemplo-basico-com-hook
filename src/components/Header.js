/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import {Text, StyleSheet, View} from 'react-native';
import React from 'react';

const Header = () => (
  <View style={styles.topo}>
    <Text style={styles.text}>Exemplo básico com Hook</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  topo: {
    flex: 1,
    backgroundColor: '#a3ad68',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});

export default Header;
