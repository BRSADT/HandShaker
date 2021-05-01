import React, { Component } from 'react';
import Colors from '../Estilos/Colors';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

class Footer extends Component {
    render() {
        return (
            <>
                <View style={styles.FooterContainer}>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/home.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/promotions.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/chats.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/notifications.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/help.png')}
                        style={styles.Icon}/>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    FooterContainer: {
        backgroundColor: Colors.darkBackground,
        flex:0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    Icon: {
        width: 25,
        height: 25,
    },
});

export default Footer;