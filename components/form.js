import { View, Image,Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import {FIREBASE_DB} from "../firebaseconfig";

const Form = () => {
  const handleAddOrder = () => {
    // Add a new order to the "orders" node in Firebase Realtime Database
    const newOrderRef = FIREBASE_DB.collection("Orders").doc(); // Using doc() to generate a unique ID
  newOrderRef.set({
    Food_Name: "Palak Paneer",
    Date: 23112023,
    VG_NG: "Veg",
    // Add more order details as needed
  });
  };
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
      <Text style={{marginTop:10}}>Place your Order😋</Text>
      <Image
        source={require("../icons/cooking.png")}
        style={{ marginTop:20,width: 70, height: 70 }}
      ></Image>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",

          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 0.2,
        //   borderRadius: 20,
        }}
        placeholder="Food Name"
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 0.2,
        //   borderRadius: 20,
        }}
        placeholder="Date"
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 50,
          width: 280,
          height: 50,
          borderWidth: 0.2,
        //   borderRadius: 20,
        }}
        placeholder="Veg OR Non-Veg"
      ></TextInput>
      <TouchableOpacity
        style={{
          marginTop: 50,
          borderWidth: 1,
          borderRadius: 20,
          width: 150,
          height: 50,
          backgroundColor: "#0174BE",
        }}
        onPress={handleAddOrder}
      >
        <Text style={{ flex: 1, alignSelf: "center", marginTop: 15 }}>
          Get Me a Tifin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
