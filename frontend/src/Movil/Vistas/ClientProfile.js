import React, { Component } from 'react';
import Styles from '../Estilos/Styles';
import Colors from '../Estilos/Colors';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import ProfileTabBar from '../Componentes/ProfileTabBar';
import EditPrivate from './ClientEditPrivate';
import EditPublic from './ClientEditPublic';
import {
  View,
  StyleSheet,
} from 'react-native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  TabBar: {
    height: 35,
  },
  TabLabel: {
    fontSize: 11,
    paddingVertical: 2,
    marginVertical: 2,
  },
});

export default class ClientProfile extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 0
    }
  }
  changeCurrentView = (newView) => {
    this.setState({
      currentView: newView
    });
  }
  showView = () => {
    switch(this.state.currentView) {
      case 0:
        return(<><EditPublic/></>);
      case 1:
        return(<><EditPrivate/></>);
    }
  }
  render() {
    return (
        <View style={Styles.MainContainer}>
          <Header />
          <ProfileTabBar active={this.state.currentView} changeView={(newView) => this.changeCurrentView(newView)} />
          {this.showView()}
          <Footer />
        </View>
    );
  }
};
/*
 <ProfileTabBar changeView={(newView) => changeCurrentView(newView)} />
 {this.showView()}
 */
/*
          <View style={Styles.Content}>
            <Tab.Navigator 
              tabBarOptions={{
                activeTintColor: '#01A39D',
                inactiveTintColor: 'black',
                tabStyle: styles.TabBar,
                labelStyle: styles.TabLabel,
              }}>
              <Tab.Screen name="Perfil Público" component={EditPublic}/>
              <Tab.Screen name="Información Privada" component={EditPrivate}/>
            </Tab.Navigator>
          </View>
*/

