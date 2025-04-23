import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import BottomNavigationBar from '../components/BottomNavigationBar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <NavBar title="Nome" />

      <View style={styles.content}>
        <Text style={styles.welcome}>Bem Vindo!</Text>

        {/* Espaço para notificações */}
        <View style={{ marginTop: 20 }}>
          {/* As notificações estarão aqui */}
        </View>
      </View>

      <BottomNavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
