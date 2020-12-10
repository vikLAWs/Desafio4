import React from 'react';
import {View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Text,Icon, Avatar, Button} from 'react-native-elements';

export default function SignIn(props) {

    const { navigation } = props

    return (
        <View>
            <Text>Login:</Text>
            <TextInput>Seu e-mail!</TextInput>
            <Text>Senha:</Text>
            <TextInput>Sua Senha!</TextInput>
            <Button onPress={() => navigation.navigate('Feed')}>Entrar</Button>
     </View>
     );
 }