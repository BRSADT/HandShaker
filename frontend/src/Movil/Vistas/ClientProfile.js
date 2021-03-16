import React, { Component } from 'react';
import Styles from '../Estilos/Styles';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import ProfileTabBar from '../Componentes/ProfileTabBar';
import EditPrivate from '../Componentes/ClientEditPrivate';
import EditPublic from '../Componentes/ClientEditPublic';
import { View } from 'react-native';

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
