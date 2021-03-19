import React from 'react';
import {
    View,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
///////////////////
import Colores from '../Estilos/Colores';
///////////////////

const Estilos = StyleSheet.create({
    Navegacion: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colores.fondoOscuro,
    },
    ContenedorIcono: {
        padding: 5,
        margin: 5,
    },
});

export default Navegacion = (props) => {
    const IrInicio = (newVar) => {
        console.log('Navegar a Inicio');
    }
    const IrPromociones = () => {
        console.log('Navegar a Promociones');
    }
    const IrChats = () => {
        console.log('Navegar a Chats');
    }
    const IrNotificaciones = () => {
        console.log('Navegar a Notificaciones');
    }
    const IrAyuda = () => {
        console.log('Navegar a Ayuda');
    }
    return(
        <View style={Estilos.Navegacion}>
            <Icon
                name='home'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => IrInicio()}
                />
            <Icon
                name='money'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => IrPromociones()}
                />
            <Icon
                name='envelope'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => IrChats()}
                />
            <Icon
                name='bell'
                type='font-awesome'
                color={Colores.simbolos}
                size={25}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => IrNotificaciones()}
                />
            <Icon
                name='question'
                type='font-awesome'
                color={Colores.simbolos}
                size={30}
                containerStyle={Estilos.ContenedorIcono}
                onPress={() => IrAyuda()}
                />
        </View>
    );
};

/*
            
*/