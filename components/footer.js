import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Footer = ({ onPressButton }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Image
          source={require("../icons/wishlist.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Image
          source={require("../icons/add-button.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Image
          source={require("../icons/user.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 110,
    backgroundColor: "#FFC436",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Footer;
