import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6429",
    borderRadius: 25,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});

export default Button;
