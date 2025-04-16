import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NavBar = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image || require("../assets/MoovIF-icon.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FF6429",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    padding: 8,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default NavBar;
