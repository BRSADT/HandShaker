import React, { Component } from 'react';
import Colors from './Colors';

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
                        source={require('../images/icon32.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
                        style={styles.Icon}/>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
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
        width: 40,
        height: 40,
    },
});

export default Footer;