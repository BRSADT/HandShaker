import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Styles from '../Estilos/Styles';

export default class ProfileTabs extends Component {
    render() {
        return(
            <View style={Styles.TabBar}>
                <TouchableOpacity onPress={() => this.props.changeView(0)}>
                    <View style={[Styles.Tab, this.props.active == 0 ? Styles.ActiveTab : null]}>
                        <Text style={[Styles.TabLabel, this.props.active == 0 ? Styles.ActiveTab : null]}>
                            Perfil Público
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeView(1)}>
                    <View style={[Styles.Tab, this.props.active == 1 ? Styles.ActiveTab : null]}>
                        <Text style={[Styles.TabLabel, this.props.active == 1 ? Styles.ActiveTab : null]}>
                            Información Privada
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}