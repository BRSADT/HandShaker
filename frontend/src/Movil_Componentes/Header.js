import React, { Component } from 'react';
import Colors from './Colors';

import {
    View,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';

class Header extends Component {
    render() {
        return (
            <>
                <View style={styles.HeaderContainer}>
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
                        style={styles.Icon}
                    />
                    <TextInput
                        style={styles.SearchInput}
                        defaultValue='Buscar...'
                    />
                    <Image
                        accessibilityRole={'image'}
                        source={require('../images/icon32.png')}
                        style={styles.Icon}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: Colors.darkBackground,
        flex:0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        margin: 10,
        height: 40,
        width: 40,
    },
    SearchInput: {
        borderRadius: 20,
        fontSize: 20,
        margin: 10,
        paddingVertical: 2,
        paddingHorizontal: 20,
        textAlign: 'center',
        height: 40,
        width: 250,
        color: Colors.searchForm,
        backgroundColor: Colors.white,
    },
});

export default Header;