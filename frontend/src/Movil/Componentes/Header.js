import React, { Component } from 'react';
import Colors from '../Estilos/Colors';
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
                        source={require('../../../public/images/menu.png')}
                        style={styles.Icon}
                    />
                    <TextInput
                        style={styles.SearchInput}
                        defaultValue='Buscar...'
                    />
                    <Image
                        accessibilityRole={'image'}
                        source={require('../../../public/images/search.png')}
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
        justifyContent: 'space-around',
    },
    Icon: {
        marginHorizontal: 30,
        height: 25,
        width: 25,
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