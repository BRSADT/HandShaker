import React, { Component } from 'react';
import Styles from './styles';

import {
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';

class EditClientPrivProfile extends Component {
    render() {
        return(
            <>
                <View style={Styles.Content}>
                    <ScrollView>
                        <View style={{flex:1}}>
                            <Text style={Styles.Label}>
                                Correo electrónico: 
                            </Text>
                        </View>
                        <View style={Styles.SectionContainer}>
                            <Text style={[Styles.Label, Styles.SectionLabel]}>
                                Cambiar Contraseña
                            </Text>
                            <Text style={Styles.Label}>
                                Contraseña Actual
                            </Text>
                            <TextInput 
                                style={Styles.Input}
                                placeholder='xxxxxxxxxxxxxxx'
                            />
                            <Text style={Styles.Label}>
                                Contraseña Nueva
                            </Text>
                            <TextInput 
                                style={Styles.Input}
                                placeholder='xxxxxxxxxxxxxxx'
                            />
                            <Text style={Styles.Label}>
                                Confirmar Contraseña Nueva
                            </Text>
                            <TextInput 
                                style={Styles.Input}
                                placeholder='xxxxxxxxxxxxxxx'
                            />
                            <View style={Styles.Button}>
                                <Text style={Styles.ButtonLabel}>
                                    Guardar
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.SectionContainer}>
                            <Text style={[Styles.Label, Styles.SectionLabel]}>
                                Dirección Personal
                            </Text>
                            <Text style={[Styles.Label, Styles.InfoLabel]}>
                                Esta dirección puede ser la de su casa o lugar de trabajo
                            </Text>
                            <Text style={Styles.Label}>
                                Calle
                            </Text>
                            <TextInput 
                                style={[Styles.Input, {maxWidth: 500}]}
                                placeholder='Calle principal'
                            />
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Text style={Styles.Label}>
                                        Número
                                    </Text>
                                    <TextInput
                                        style={Styles.Input}
                                    />
                                </View>
                                <View style={{flex: 3}}>
                                    <Text style={Styles.Label}>
                                        Colonia
                                    </Text>
                                    <TextInput
                                        style={Styles.Input}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Text style={[Styles.Label, {flex: 2, textAlign: 'left'}]}>
                                    Entre
                                </Text>
                                <TextInput
                                    style={[Styles.Input, {flex: 7}]}
                                    placeholder='Calle 1'
                                />
                                <Text style={[Styles.Label, {flex: 1, textAlign: 'left'}]}>
                                    Y
                                </Text>
                                <TextInput
                                    style={[Styles.Input, {flex: 7}]}
                                    placeholder='Calle 2'
                                />
                            </View>
                            <View style={Styles.Button}>
                                <Text style={Styles.ButtonLabel}>
                                    Guardar
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    }
}

export default EditClientPrivProfile;