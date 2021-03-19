import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Header,
    Icon,
    Input,
} from 'react-native-elements';
// ====================
import Colores from '../Estilos/Colores';
// ====================

const Estilos = StyleSheet.create({
    Encabezado: {
        flexDirection: 'row',
    },
    ContenedorComponente: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContenedorIcono: {
        flex: 1,
        justifyContent: 'center',
    },
    ContenedorBusqueda: {
        flex: 1,
        height: 40,
        paddingVertical: 0,
    },
    Busqueda: {
        height: 40,
        borderRadius: 20,
        backgroundColor: Colores.blanco,
        paddingHorizontal: 20,
    },
    TextoBusqueda: {
        fontSize: 18,
        padding: 0,
    },
});

export default Encabezado = (props) => {
    const Buscar = () => {
        console.log('Realizar Busqueda');
    };
    const Menu = () => {
        console.log('Abrir Menu');
    };
    return(
        <Header
            backgroundColor={Colores.fondoOscuro}
            containerStyle={Estilos.Encabezado}
            leftContainerStyle={Estilos.ContenedorComponente}
            centerContainerStyle={[Estilos.ContenedorComponente, {flex: 5}]}
            rightContainerStyle={Estilos.ContenedorComponente}
            >
            <Icon
                name='bars'
                type='font-awesome'
                size={25}
                color={Colores.blanco}
                containerStyle={Estilos.ContenedorIcono}
                iconStyle={Estilos.Icono}
                onPress={() => Menu()}
                />
            <Input
                placeholder='Buscar...'
                containerStyle={Estilos.ContenedorBusqueda}
                inputContainerStyle={Estilos.Busqueda}
                inputStyle={Estilos.TextoBusqueda}
                />
            <Icon
                name='search'
                type='font-awesome'
                size={25}
                color={Colores.simbolos}
                containerStyle={Estilos.ContenedorIcono}
                iconStyle={Estilos.Icono}
                onPress={() => Buscar()}
                />
        </Header>
    );
};