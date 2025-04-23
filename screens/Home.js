import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

const Home = () => {
  return (
    <View style={styles.container}>
      <NavBar title="Nome" />
      <View style={{ paddingVertical: 50 }}>
        <Text style={styles.text1}>Bem Vindo!</Text>
        <Text style={styles.text2}>O que gostaria de fazer?</Text>
      </View>
      <View style={{ gap: 24, width: "80%" }}>
        <Button
          title="Gerenciar Alunos"
          onPress={() => console.log("Gerenciar Alunos")}
        />
        <Button
          title="Gerenciar Linhas"
          onPress={() => console.log("Gerenciar Linhas")}
        />
        <Button title="Pagamentos" onPress={() => console.log("Pagamentos")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
