import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet, AsyncStorage } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `${email} + ${password}`);
  }

  handleLogin = () => {
    fetch('http://127.0.0.1:8000/api/login',{
        method: 'POST',
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        })
    })
    .then((response) => response.json())
    .then((res) => {

        if (res.success === true){

            alert(res.message)

        }else{
            alert(res.message)
        }

    })
}

  render() {
    return (
      <View style={styles.container}>
        <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              marginBottom: 40
            }}>LOGIN
            </Text>
        <Text style ={styles.headerText}></Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Administrador'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Contraseña'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.handleLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
});