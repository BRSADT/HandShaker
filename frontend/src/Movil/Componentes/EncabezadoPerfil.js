import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {
    Avatar,
    Button,
    Image,
    Rating,
    Text,
} from 'react-native-elements';
// ===================
import Colores from '../Estilos/Colores';
// ===================
const Estilos = StyleSheet.create({
    ImagenFondo: {
        height: 100,
    },
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    Fila: {
        alignSelf: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: 50,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    ContenedorComponente: {
        justifyContent: 'flex-end',
        marginBottom: 7,
    },
    BotonContratar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 24,
        width: 88,
        padding: 0,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 12,
    },
    Datos: {
        alignItems: 'center',
        marginTop: 60,
    },
    Infromacion: {
        fontSize: 12,
    },
});

export default EncabezadoPerfil = () => {
    const avatar = require('../../../public/Profile/user.png');
    const valoracion = 2.5;
    const nombre = 'María Jośe Arellano';
    const titulo = 'Lic. Diseño Gráfico';
    const descripcion = 'Me dedico a crear páginas y aplicaciones';
    const Contratar = () => {
        console.log('Botón Contratar');
    };
    return(
        <View>
                        <Image
                            source={require('../../../public/Images/test.jpg')}
                            style={Estilos.ImagenFondo}
                            PlaceholderContent={<ActivityIndicator />}
                            />
                        <View style={Estilos.Fila}>
                            <Rating 
                                imageSize={20} 
                                readonly 
                                startingValue={valoracion} 
                                ratingColor={Colores.simbolos}
                                ratingBackgroundColor={Colores.fondoOscuro}
                                tintColor={Colores.fondo}
                                type='custom'
                                style={Estilos.ContenedorComponente} 
                                />
                            <Avatar
                                rounded
                                icon={{name:'user', type:'font-awesome', color:'black'}}
                                source={avatar}
                                size={100}
                                containerStyle={Estilos.ContenedorAvatar}
                                />
                            <Button
                                title='Contratar'
                                containerStyle={Estilos.ContenedorComponente}
                                buttonStyle={Estilos.BotonContratar}
                                titleStyle={Estilos.EtiquetaBoton}
                                onPress={Contratar}
                                />
                        </View>
                        <View style={Estilos.Datos}>
                            <Text style={Estilos.Informacion}>
                                {nombre}
                            </Text>
                            <Text style={Estilos.Informacion}>
                                {titulo}
                            </Text>
                            <Text style={Estilos.Informacion}>
                                {descripcion}
                            </Text>
                        </View>
                    </View>
    );
}