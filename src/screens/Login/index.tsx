import React from 'react';
import { View, Text, TextInput, Switch } from "react-native";

import { Button, Loader, Alert } from "../../components";

import Container from './container';
import { Variables } from '../../styles';
import { Constants } from 'expo';

export class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container subtitulo={"Bem vindo ao aplicativo da Preves"}>
                
                <View style={loginStyles.content}>
                    <Loader loading={this.state.loading} />
                    <Alert ref={this.alerta} />

                    <Text style={loginStyles.label}>CPF</Text>
                    <TextInput name={"cpf"} style={Styles.textInput} placeholder="Digite aqui seu CPF" returnKeyType="next" blurOnSubmit={false} underlineColorAndroid="transparent"
                        value={this.state.cpf}
                        onSubmitEditing={() => { this.focusNextField('senha'); }} onChangeText={value => this.setState({ cpf: value })}
                        ref={input => { this.inputs['cpf'] = input; }} />

                    <Text style={[loginStyles.label, { marginTop: 20 }]}>Senha</Text>
                    <TextInput name={"senha"} style={Styles.textInput} placeholder="Digite aqui sua senha" returnKeyType="done" secureTextEntry={true}
                        value={this.state.senha}
                        ref={input => { this.inputs['senha'] = input; }} onChangeText={value => this.setState({ senha: value })} />
                    
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{ width: 40 }}>
                            {this.state.touchIDAvailable &&
                                <Button style={loginStyles.loginFingerprint} onClick={this.fingerLogin}>
                                    <Icon name={"fingerprint"} style={{ marginRight: 0 }} size={28} color={"#FFF"} borderRadius={10} />
                                </Button>
                            }
                        </View>
                        
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-end' }}>
                            <Text style={loginStyles.labelRemeber}>Lembrar-me</Text>
                            <Switch value={this.state.lembrar} thumbColor={Variables.colors.primary} ios_backgroundColor={"#CCC"}
                                onValueChange={value => this.setState({ lembrar: value })} />
                        </View>
                        
                    </View>

                    <View>
                        <Button title="Entrar" onClick={this.login} style={loginStyles.loginButton} />
                        <Button title="Primeiro Acesso/Esqueci minha senha" onClick={this.firstAccess} light={true}
                                style={{ backgroundColor: "transparent", marginTop: 5 }} titleStyle={[Styles.buttonLight, { fontSize: 14, color: Variables.colors.secondary }]} />
                    </View>
                </View>

                <Text style={{ marginBottom: 10, padding: 5, textAlign:"center", color: "#8F8E93" }}>
                    Versão {Constants.manifest.version}
                </Text>

            </Container>
        )
    }
}