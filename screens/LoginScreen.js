import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Button from "../components/Button";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MoovIF</Text>

      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.icon}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="E-mail:"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha:"
        placeholderTextColor="#000"
        secureTextEntry
      />

      <Button title={"Entrar"} onPress={() => console.log("entrou")} style={styles.button} />

      <Text style={styles.footerText}>
        Não possui uma conta? Entre em contato conosco por{' '}
        <Text style={styles.link}>aqui.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 10,
    color: '#000',
  },
  iconContainer: {
    marginBottom: 30,
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    width:"80%"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#FF3D00',
  },
});
