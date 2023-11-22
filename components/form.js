import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const Form = () => {
  return (
    <View
      style={{
        alignItems: "center",
        width: 341,
        height: 541,
        alignSelf: "center",
        marginTop: 50,
        backgroundColor: "#EEF5FF",
        borderRadius: 20,
      }}
    >
      <Text>Place your Order😋</Text>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",

          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 1,
          borderRadius: 20,
        }}
        placeholder="Food Name"
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 1,
          borderRadius: 20,
        }}
        placeholder="Date"
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 1,
          borderRadius: 20,
        }}
        // placeholderStyle={{ marginTop: 100 }}
        placeholder="Veg OR Non-Veg"
      ></TextInput>
      <TouchableOpacity
        style={{
          marginTop: 50,
          borderWidth: 2,
          borderRadius: 20,
          width: 150,
          height: 50,
          backgroundColor: "#0174BE",
        }}
      >
        <Text style={{ flex: 1, alignSelf: "center" }}>Get Me a Tifin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
