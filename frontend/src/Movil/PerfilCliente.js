/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styles from './Components/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EditClientPrivProfile from './Components/EditClientProfilePriv';
import EditClientPubProfile from './Components/EditClientProfilePub';

import {
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={Styles.MainContainer}>
        <Header />
        <EditClientPubProfile />
        <Footer />
      </View>
    </>
  );
};

export default App;
