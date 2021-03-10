import React, { Component } from 'react';
import Styles from '../Estilos/styles';

import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
} from 'react-native';

class EditClientPubProfile extends Component {
    render() {
        return(
            <>
                <View style={Styles.Content}>
                    <ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                accessibilityRole={'image'}
                                source={require('../images/icon32.png')}
                                style={Styles.ProfileImage}/>
                            <View style={{flex:3, paddingLeft: 10, alignContent: 'center'}}>
                                <Text style={Styles.Label}>
                                    Nombre(s)*
                                </Text>
                                <TextInput 
                                    style={Styles.Input}
                                    returnKeyType='next'
                                    selectTextOnFocus={true}
                                    textContentType='givenName'
                                />
                                <Text style={Styles.Label}>
                                    Apellidos*
                                </Text>
                                <TextInput
                                    style={Styles.Input}
                                    returnKeyType='next'
                                    textContentType='familyName'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={Styles.Label}>
                                Teléfono (10 dígitos)
                            </Text>
                            <TextInput
                                style={Styles.Input}
                                returnKeyType='next'
                                keyboardType='number-pad'
                                placeholder='xx-xxxx-xxxx'
                                maxLength={10}
                                textContentType='telephoneNumber'
                            />
                            <Text style={Styles.Label}>
                                Correo Electrónico
                            </Text>
                            <TextInput
                                style={Styles.Input}
                                placeholder='ejemplo@handshaker.com'
                                textContentType='emailAddress'
                            />
                        </View>
                        <View style={Styles.Button}>
                            <Text style={Styles.ButtonLabel}>
                                Guardar
                            </Text>
                        </View>
                        <Text style={[Styles.Label, Styles.InfoLabel]}>
                            La información provista en esta 
                            pestaña será visible para los 
                            trabajadores que usted contacte, 
                            evite usar lenguaje inapropiado.                       
                        </Text>
                        <Text style={[Styles.Label, Styles.InfoLabel]}>
                            * Estos campos son obligatorios 
                        </Text>
                    </ScrollView>
                </View>
            </>
        );
    }
}

export default EditClientPubProfile;