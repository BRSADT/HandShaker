/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styles from './components/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import EditClientPrivProfile from './components/EditClientProfilePriv';
import EditClientPubProfile from './components/EditClientProfilePub';

import {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={Styles.MainContainer}>
        <Header />
        <EditClientPrivProfile />
        <Footer />
      </View>
    </>
  );
};

export default App;
